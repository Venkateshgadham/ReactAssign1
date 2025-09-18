import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import LoadingSpinner from './components/LoadingSpinner';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="card-container">
      <Container>
        <h1 className="mb-4 text-center">User Profiles</h1>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </Container>
    </div>
  );
}

export default App;

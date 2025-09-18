import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const UserCard = ({ user }) => {
  // New DiceBear v6 API for avatars
  const avatarUrl = `https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}`;
  const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Row>
          <Col xs={12} md={3} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <img
              src={avatarUrl}
              alt={user.name}
              className="img-fluid rounded-circle"
              style={{ width: '120px', height: '120px' }}
            />
          </Col>
          <Col xs={12} md={9}>
            <h5 className="mb-2">{user.name}</h5>
            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="mb-1"><strong>Phone:</strong> {user.phone}</p>
            <p className="mb-1"><strong>Company:</strong> {user.company.name}</p>
            <p className="mb-1"><strong>Website:</strong> {user.website}</p>
            <p className="mb-1"><strong>Address:</strong> {fullAddress}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

import React from 'react';
import { Container } from 'react-bootstrap';
import Specialist from '../pages/Specialist'; 

const Main = () => {
  return (
    <Container fluid className="mt-4">
      <Specialist />
      {/* Add more content here */}
    </Container>
  );
};

export default Main;
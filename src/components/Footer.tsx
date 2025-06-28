'use client';

import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <p className="mb-0 text-muted">
          &copy; {new Date().getFullYear()} Daily Real Estate. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

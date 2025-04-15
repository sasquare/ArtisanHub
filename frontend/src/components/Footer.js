import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>ArtisanHub</h5>
            <p>Connecting you with Nigeria’s best artisans.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/login" className="text-white">
                  Login
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@artisanhub.ng</p>
            <p>Phone: +234 813 634 0849</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>© 2025 ArtisanHub. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

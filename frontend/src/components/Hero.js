import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <section
      className="py-5 text-center"
      style={{
        background: "linear-gradient(135deg, #28a745, #007bff)",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 fw-bold">
              Find Trusted Artisans in Nigeria
            </h1>
            <p className="lead">
              Connect with skilled professionals for all your needs.
            </p>
            <Form onSubmit={handleSearch} className="my-4">
              <InputGroup className="mx-auto" style={{ maxWidth: "500px" }}>
                <Form.Control
                  type="text"
                  placeholder="Search for artisans (e.g., Carpenter, Plumber)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="light" type="submit">
                  Search
                </Button>
              </InputGroup>
            </Form>
            <Button variant="light" size="lg" href="/services" className="mt-2">
              Explore Services
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

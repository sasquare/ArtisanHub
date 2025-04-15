import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";

function Services() {
  const [artisans, setArtisans] = useState([]);
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/artisans");
        setServices(response.data.services);
        setArtisans(response.data.artisans);
      } catch (error) {
        console.error("Error fetching artisans:", error);
        setArtisans([]);
        setServices([]);
      }
    };
    fetchArtisans();
  }, []);

  const filteredArtisans = filter
    ? artisans.filter((artisan) => artisan.service === filter)
    : artisans;

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Find Artisans</h2>
        <Form.Group className="mb-4" controlId="serviceFilter">
          <Form.Label>Filter by Service</Form.Label>
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Services</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {filteredArtisans.length === 0 ? (
          <p className="text-center">No artisans found.</p>
        ) : (
          <Row xs={1} sm={2} md={3} lg={4}>
            {filteredArtisans.map((artisan) => (
              <Col key={artisan.id} className="mb-4">
                <Card style={{ height: "350px" }}>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">
                      {artisan.name}
                    </Card.Title>
                    <Card.Text className="flex-grow-1">
                      <strong>Service:</strong> {artisan.service}
                      <br />
                      <strong>Location:</strong> {artisan.location}
                      <br />
                      <strong>Contact:</strong> {artisan.contact}
                    </Card.Text>
                    <Button
                      variant="success"
                      href={`tel:${artisan.contact}`}
                      className="mt-auto align-self-center"
                    >
                      Contact Artisan
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default Services;

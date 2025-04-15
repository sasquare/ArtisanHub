import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Categories.css";

function Categories() {
  const categories = [
    { name: "Plumbing", image: "https://placehold.co/150x150?text=Plumbing" },
    { name: "Masonry", image: "https://placehold.co/150x150?text=Masonry" },
    { name: "Painting", image: "https://placehold.co/150x150?text=Painting" },
    {
      name: "Welding Work",
      image: "https://placehold.co/150x150?text=Welding",
    },
    {
      name: "Pedicure/Manicure",
      image: "https://placehold.co/150x150?text=Pedicure",
    },
    {
      name: "Transport and Logistics",
      image: "https://placehold.co/150x150?text=Transport",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Explore Our Services</h2>
        <Row xs={1} sm={2} md={3} lg={4}>
          {categories.map((category, index) => (
            <Col key={index} className="mb-4">
              <Card className="category-card h-100">
                <Card.Img
                  variant="top"
                  src={category.image}
                  alt={category.name}
                  onError={(e) => {
                    console.error(`Failed to load image for ${category.name}`);
                    e.target.src = "https://placehold.co/150x150?text=Error";
                  }}
                />
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <Card.Title className="text-center mb-0">
                    {category.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import axios from "axios";

function Categories() {
  const [services, setServices] = useState([]);
  const imageMap = {
    Carpentry: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Works
    Plumbing: "https://images.unsplash.com/photo-1622037026727-d3635c932307", // New
    Tailoring: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", // Works
    Electrical: "https://images.unsplash.com/photo-1600585152915-d208bec867a1", // Works
    Masonry: "https://images.unsplash.com/photo-1581092919532-47c09902b7c6", // New
    Painting: "https://images.unsplash.com/photo-1614277814082-8d33c1a8e5c8", // New
    "Fashion Designers":
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d", // Works
    "Hair Stylist/Barber":
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486", // Works
    "Welding Work":
      "https://images.unsplash.com/photo-1620502305926-4482bf006d7d", // New
    Photography: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", // Works
    "Pedicure/Manicure":
      "https://images.unsplash.com/photo-1598967507262-c3f73542e3cb", // New
    "Makeup Artist":
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796", // Works
    "Transport and Logistics":
      "https://images.unsplash.com/photo-1600585153488-3e7c81c719fa", // New
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/artisans");
        const fetchedServices = response.data.services.map((service) => ({
          title: service,
          desc: `Find skilled ${service.toLowerCase()} professionals.`,
          img: imageMap[service] || "https://via.placeholder.com/150",
        }));
        setServices(fetchedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      }
    };
    fetchServices();
  }, []);

  // Group services into sets of 3 for carousel
  const groupedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    groupedServices.push(services.slice(i, i + 3));
  }

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        {services.length === 0 ? (
          <p className="text-center">Loading services...</p>
        ) : (
          <Carousel interval={6000} indicators={true} controls={true}>
            {groupedServices.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <Row className="justify-content-center">
                  {group.map((service, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                      <Card style={{ height: "400px" }}>
                        <Card.Img
                          variant="top"
                          src={service.img}
                          style={{ height: "200px", objectFit: "cover" }}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                        />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="text-center">
                            {service.title}
                          </Card.Title>
                          <Card.Text className="flex-grow-1">
                            {service.desc}
                          </Card.Text>
                          <Button
                            variant="success"
                            href="/services"
                            className="mt-auto align-self-center"
                          >
                            Find Artisan
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    </section>
  );
}

export default Categories;

"use client"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <Container>
        <h2 className="section-title">Pricing</h2>
        <Row>
          {["Basic", "Standard", "Premium"].map((plan, i) => (
            <Col md={4} key={i}>
              <Card className="bg-dark text-white border-warning text-center">
                <Card.Body>
                  <Card.Title className="text-warning">{plan}</Card.Title>
                  <h3 className="my-3">$ {50 + i * 50}</h3>
                  <Button className="btn-gold">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

import { Container, Form, Button } from "react-bootstrap";

export default function Contacts() {
  return (
    <section id="contact" className="section bg-dark">
      <Container>
        <h2 className="section-title">Contact Us</h2>
        <Form className="mx-auto" style={{ maxWidth: 600 }}>
          <Form.Control className="mb-3" placeholder="Your Name" />
          <Form.Control className="mb-3" placeholder="Email" />
          <Form.Control
            as="textarea"
            rows={4}
            className="mb-3"
            placeholder="Message"
          />
          <Button className="btn-gold w-100">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
}

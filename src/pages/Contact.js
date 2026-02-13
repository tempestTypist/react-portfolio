import { Row, Col } from 'react-bootstrap';
import { ContactForm } from '../components/ContactForm'

const Contact = () => {

  return (
    <Row as={"section"} id="contact">
      <Col className="d-flex justify-content-center">
        <div className="card">
          <div className="card-body d-flex justify-content-center">
            <ContactForm />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;

import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
              <h2>Contactame</h2>
 
                <form >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <h3>+57 3157993028</h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3></h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3>Mathewkel06@mail.com</h3>
                    </Col>
                  
                  </Row>
                </form>
          </Col>
          </Row> 
      </Container>
    </section>
  )
}

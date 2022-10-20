import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Design-sem-nome-_1_-2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" style={{ width: 190 }}/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gheysiell-santana-33b021210/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.facebook.com/gheysiell.c.santana/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/gheysiell.santanna/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
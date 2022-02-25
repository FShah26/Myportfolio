import '../css/App.css';
import React  from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import {FaFacebookF, FaInstagram, FaLinkedinIn,FaGithub} from 'react-icons/fa';
import { FB_URL,INSA_URL,LINKEDIN_URL,GITHUB_URL} from '../utils/constants';

export default function Contact(){
    let currYear = new Date().getFullYear();
    return(
            <footer className="footer text-white container-fluid wow zoomIn">
              <Container>
                  <Row className="align-items-center">
                      <Col md={6}>
                          <div className="nav justify-content-center justify-content-md-start">
                                <a href={FB_URL} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                                <a href={GITHUB_URL} target="_blank" rel="noreferrer"><FaGithub /></a>
                                <a href={INSA_URL} target="_blank" rel="noreferrer"><FaInstagram/></a>
                                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                            </div>
                        </Col>
                    <Col md={6} className="text-center text-md-right">
                        <p> &copy; {currYear} Copyright all right reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
import '../css/App.css';
import React  from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {FaMapMarkedAlt, FaPhoneVolume, FaEnvelope} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function ContactMe(){
    return(
        <>
            <section id="contact" >
                <Container>
                    <div className="separated container"></div>
                    <Row>
                        <Col lg={5}>
                            <div className="contact-info">
                                <div className="title text-white">
                                    <h3>Contact Me</h3>
                                </div>
                                <br/><br/>
                                <h4>Get in touch</h4>
                                <p className="text-white">
                                    Currently available for full-time/freelancing,if the right project comes along, opportunities.  Feel free to contact me.
                                </p>
                                <ul>
                                    <li className="media">
                                        <FaMapMarkedAlt size={25} style={{color: "#ff9301"}}/>
                                        <span className="media-body">
                                            Halifax, NS
                                        </span>
                                        
                                    </li>
                                        
                                    <li className="media">
                                        <FaEnvelope size={20} style={{color: "#ff9301"}}/>
                                        <span className="media-body">
                                            fenilshah78@gmail.com
                                        </span>
                                        
                                    </li>
                                        
                                        <li className="media">
                                        <FaPhoneVolume size={25} style={{color: "#ff9301"}}/>
                                        <span className="media-phone">
                                            +1-(902)-989-7655
                                        </span>
                                        
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <ContactForm />
                        
                    </Row>
                </Container>
            </section>
            <br/><br/>
            <div className="separated container"></div>
            <Col lg={12} className="wow zoomIn">
                <div className="google-map container">
                    <div className="embed-responsive embed">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181670.36334880456!2d-63.772980906421616!3d44.64610343332128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a211407dbfac1%3A0x666be3a6438b2ddc!2sHalifax%2C%20NS!5e0!3m2!1sen!2sca!4v1645107355829!5m2!1sen!2sca" width="600" height="450" style={{border:"0px"}} allowFullScreen="" loading="lazy" title="loc"></iframe>
                    </div>
                </div>
            </Col>
            <br/><br/><br/><br/>
            <div className="separated container"></div>
            <br/><br/><br/>
        </>

    );
}
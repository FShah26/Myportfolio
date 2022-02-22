import '../css/App.css';
import React  from 'react';
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { FB_URL,INSA_URL,LINKEDIN_URL} from '../utils/constants';
import fshah from '.././resources/FSHAH.jpg';
import { Container,Row, Col } from 'react-bootstrap';

export default function Biography(){
    return(
        <>
        <br/><br/><br/><br/>
        <section id="about" className="wow zoomIn">
            <Container>
                <div className="separated"></div>
                <Row>
                    <Col lg={4}>
                        <div className="about-me">
                                <div className="img" data-wow-duration="0.5s">            
                                <img src={fshah} alt=""/>
                                </div>
                                <div className="social-icons justify-content-center">
                                    <a href={FB_URL} target="_blank" rel="noreferrer"><FaFacebookF size={25}/></a>
                                    <a href={INSA_URL} target="_blank" rel="noreferrer"><FaInstagram size={25}/></a>
                                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><FaLinkedinIn size={25}/></a>
                                </div>
                        </div>
                        <div className="info">
                                <p>Full-stack Software Developer</p>
                                <h3>Fenil Shah</h3>
                        </div> 
                    </Col>
                    <Col lg={7} className="ml-auto">
                    <div className="about-info">
                                <div className="title text-white">
                                    <h3>Biography</h3>
                                </div>
                                <br/><br/>
                                <div className="text-white">
                                    <p>
                                        Currently pursuing Master’s of Applied Computer Science at Dalhousie University. Graduating in May,2022
                                        As a final term, I'm working as a <span ><b className='text-yellow'>Co-Op Full-Stack Developer</b></span> at <b>Kinaxis Inc.</b> in the Innovation Incubator team. 
                                    </p>
                                    <p>
                                       I'm a <b>Full-Stack Software Developer</b> with 2 years 5 months of substantial hands-on experience in the software industry. 
                                       During my job experience, I have worked on developing applications following the Software Development Life Cycle with application of Agile methodology.
                                       I have hands-on experience on Functional & Object-Oriented Principles, Test Driven Development, Event-Driven approach, Relational databases and developing cloud, web & desktop applications following best practices.
                                    </p>
                                </div>
                                
                                <div className="info-list">
                                    <Row>
                                        <Col sm={6}>
                                            <ul>
                                                <li>
                                                    <label>Name:</label>
                                                    <span>Fenil Shah</span>
                                                </li>
                                                
                                                <li>
                                                    <label>Birthday:</label>
                                                    <span>16th February 1996</span>
                                                </li>
                                                
                                                <li>
                                                    <label>Age:</label>
                                                    <span>26 Years</span>
                                                </li>
                                                
                                                <li>
                                                    <label>Address:</label>
                                                    <span>Halifax,NS-Canada</span>
                                                </li>                                       
                                            </ul>
                                        </Col>
                                        <Col sm={6}>
                                            <ul>
                                                <li>
                                                    <label>Phone:</label>
                                                    <span>+1-(902)-989-7655</span>
                                                </li>
                                                
                                                
                                                <li>
                                                    <label>Email:</label>
                                                    <span>fenilshah78@gmail.com</span>
                                                </li>                                             
                                                
                                                
                                                <li>
                                                    <label>Availability:</label>
                                                    <span>Full-time</span>
                                                </li>                                       
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>                          
                            </div>
                    </Col>
                </Row>
            </Container>
            <br/><br/> 
        </section>
        </>
    );
}


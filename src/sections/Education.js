import '../css/App.css';
import React  from 'react';
import {FaUserGraduate,FaBookOpen,FaTrophy,FaRegClock} from 'react-icons/fa';
import DDIT from '../resources/DDIT.png';
import DAL from '../resources/DAL.png';
import { Container, Row,Col } from 'react-bootstrap';

export default function Education(){
    return(
        <>
        <br/><br/>
        <section className="mh-skills wow zoomIn" id="education">
            <Container>
                <div className="separated"></div>
                <Row>
                    <Col md={12}>
                        <div className="resume-box">
                            <div className="title text-white">
                                <h3>Education</h3>
                            </div>
                            <Row>
                                <Col lg={6}>
                                    <ul className="education-box" style={{height:"710px"}}>
                                        <li>
                                            <Row>
                                                <a href='https://www.ddu.ac.in/' target="_blank" rel="noreferrer">
                                                    <img src={DDIT} alt="Logo of Dharmsinh Desai University" style={{paddingLeft:"10px",paddingTop:"20px",paddingBottom:"20px"}}/>
                                                </a> 
                                            </Row>
                                        </li>
                                        
                                        <li>
                                            <Row><FaUserGraduate size={25}/>
                                                <span style={{paddingLeft:"10px"}}>
                                                    <a href="https://www.ddu.ac.in/Technology-Departments5.php" target="_blank" rel="noreferrer">
                                                        Bachelor's of Information Technology
                                                    </a>
                                                </span> 
                                            </Row>
                                        </li>

                                        <li>
                                            <Row>
                                                <FaRegClock size={25}/>
                                                <span style={{paddingLeft:"10px"}}>2014 - 2018</span> 
                                            </Row>
                                        </li>

                                        <li>
                                            <Row>
                                                <FaTrophy size={25}/>
                                                <span style={{paddingLeft:"10px"}}>CGPA: 3.78 / 4 </span> 
                                            </Row>
                                        </li>

                                        <li>
                                            <Row>
                                                <FaBookOpen size={25}/>
                                                <span style={{paddingLeft:"10px"}}>Courses</span>
                                            </Row>
                                            <span className="subjects">
                                                Object-Oriented Programming
                                            </span>
                                            <span className="subjects">
                                                Data Structures and Algorithms
                                            </span>
                                            <span className="subjects"> 
                                                Data Analysis & Extraction
                                            </span>
                                            <span className="subjects">
                                                Web Technologies
                                            </span>
                                            <span className="subjects">
                                                Design Patterns & Application Frameworks
                                            </span>
                                        </li>
                                        <br/><br/><br/>                                                                           
                                    </ul>
                                </Col>
                                <Col lg={6}>
                                    <ul className="education-box">
                                        <li>
                                            <Row>
                                                <a href='https://www.dal.ca/' target="_blank" rel="noreferrer">
                                                    <img src={DAL} style={{paddingLeft:"10px", height:"70px"}} alt="Logo of Dalhousie University"/>
                                                </a> 
                                            </Row>
                                        </li>
                                        
                                        <li>
                                            <Row>
                                                <FaUserGraduate size={25}/>
                                                <span style={{paddingLeft:"10px"}}>
                                                    <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&catalogid=106&chapterid=6528&topicgroupid=28582&loaduseredits=False" target="_blank" rel="noreferrer">
                                                        Master's of Applied Computer Science
                                                    </a>
                                                </span>  
                                            </Row>
                                        </li>

                                        <li>
                                            <Row>
                                                <FaRegClock size={25}/>
                                                <span style={{paddingLeft:"10px"}}>2021 - 2022</span> 
                                            </Row>
                                        </li>

                                        <li>
                                            <Row>
                                                <FaTrophy size={25}/>
                                                <span style={{paddingLeft:"10px"}}>CGPA: 3.9 / 4 </span> 
                                            </Row>
                                        </li>

                                        <li>
                                            <Row>
                                                <FaBookOpen size={25}/>
                                                <span style={{paddingLeft:"10px"}}>Courses</span>
                                            </Row>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+5408" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Data Management, Warehousing and Analytics
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+5308" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Advanced Software Development
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+5709" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Advanced Web Development
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+5410" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Serverless Data Processing
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+5409" target="_blank" rel="noreferrer">
                                                <span className="subjects"> 
                                                    Cloud Computing
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+6612" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Visual Analytics
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+6505" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Machine Learning
                                                </span>
                                            </a>
                                            <a href="https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+5193" target="_blank" rel="noreferrer">
                                                <span className="subjects">
                                                    Technology Innovation
                                                </span>
                                            </a>
                                        </li>
                                        <br/><br/><br/>                                                            
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
import '../css/App.css';
import React  from 'react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import file from '../resources/Resume.pdf';
import {GITHUB_URL,LINKEDIN_URL} from '../utils/constants';
import { Row,Container,Col } from 'react-bootstrap';

export default function Profile(){
    return(
            <main>
            <section className="banner wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="1s" id="home" pt-page="true" pt-page-1="true">
                <div className="top-fixed d-flex">
                    <div className="info">
                        <label>+1-902-(989)-7655</label>&nbsp; | &nbsp;
                        <label>fenilshah78@gmail.com</label>
                    </div>
                    <div className="social">
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                            <i><FaGithub /></i>
                        </a>
                        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" >
                            <i><FaLinkedinIn/></i>
                     </a>
                 </div>
                </div>
                <Container>
                    <Row className='full-screen align-items-center'>
                        <Col lg={7}>
                        <div className="box">
                             <h6>Hey there, I'm</h6>
                             <h1>Fenil Shah</h1>
                             <p className="lead">
                                 Co-Op Developer, Kinaxis Inc. | Dalhousie University GRAD@2022 | Full-stack Software Developer | Ex-Infoscion
                             </p>
                             <p className="desc">
                                 I'm a graduate student at Dalhousie University graduating in May,2022 and currently serving as a Co-Op Full Stack Developer at Kinaxis Inc. and looking for fulltime opportunities.
                             </p>
                             <div className="btn-bar">
                                 <a href={file} target="_blank" rel="noreferrer"  download>Download CV</a>
                             </div>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                <div className="me"></div>
                <br/>
                <br/><br/>
            </section>
            </main>
    );
}
import '../css/App.css';
import React  from 'react';
import {FaJava,FaPython,FaGitAlt,FaGithub,FaBitbucket, FaGitlab,FaDocker,FaHtml5,FaCss3Alt,FaReact,FaNode,FaBootstrap,FaAws} from 'react-icons/fa';
import {CgCPlusPlus,CgCloud} from 'react-icons/cg';
import {SiCsharp,SiSpringboot,SiMysql,SiMicrosoftsqlserver,SiMongodb,SiAzuredevops,SiJira,SiSwagger,SiPostman,SiDotnet} from 'react-icons/si';
import { Container,Row,Col } from 'react-bootstrap';
import Ratings from '../components/Ratings';
import Certifications from './Certifications';
import CertifiedSkills from './CertifiedSkills';

export default function Skills(){
    return(
        <>
        <section id="skills" >
            <Container>
                <div className="separated container"></div>
                <div className="title text-white">
                    <h3>Skills</h3>
                </div>    
                <br/><br/><br/>
                <Row>
                    <Col lg={4} className="wow bounceInLeft">
                        <div className="skills-box">
                            <div className="content text-white">
                                <h5>Programming Languages</h5>
                                <br/>
                                <Row>
                                    <Col>
                                        <CgCPlusPlus size={50} title="C++"/>
                                        <Ratings value={2.5}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaJava size={50} title="Java"/>
                                        <Ratings value={4}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <FaPython size={50} title="Python"/>
                                        <Ratings value={3.5}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <SiCsharp size={50} title="CSharp"/>
                                        <Ratings value={4}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>  
                        <br/>
                        <br/> 
                    </Col>
                    <Col lg={4} className="wow bounceInLeft">
                        <div className="skills-box">
                            <div className="content text-white">
                                <h5>Development Frameworks</h5>
                                <br/>
                                <Row>
                                    <Col>
                                        <SiSpringboot size={50} title="SpringBoot"/>
                                        <Ratings value={3}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <span className='subjects'>.NET Core</span>
                                        <div style={{paddingLeft:"30px"}}><Ratings value={4} /></div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <span className='subjects'>Entity Framework</span>
                                        <div style={{paddingLeft:"50px"}}><Ratings value={4} /></div>
                                    </Col>
                                    <br/>
                                </Row>
                            </div>
                        </div>  
                        <br/>
                        <br/> 
                    </Col>
                    <Col lg={4} className="wow bounceInLeft">
                        <div className="skills-box">
                            <div className="content text-white">
                                <h5>Databases </h5>
                                <br/>
                                <Row>
                                    <Col>
                                        <SiMysql size={50} title="mySQL"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <SiMicrosoftsqlserver size={50} title="MS SQL Server"/>
                                        <Ratings value={4}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <SiMongodb size={50} title="MongoDB"/>
                                        <Ratings value={3.5}/>
                                    </Col>
                                    <br/>
                                </Row>
                            </div>
                        </div>  
                        <br/>
                        <br/> 
                    </Col>
                </Row>

                <Row>
                    <Col lg={5} className="wow bounceInLeft">
                        <div className="skills-box">
                            <div className="content text-white">
                                <h5>Web Technologies</h5>
                                <br/>
                                <br/>
                                <Row>
                                    <Col>
                                        <FaHtml5 size={50} title="Html5"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaCss3Alt size={50} title="CSS3"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaBootstrap size={50} title="Bootstrap"/>
                                        <Ratings value={4}/>
                                    </Col>
                                </Row>
                                <br/>
                                <br/>
                                <Row>
                                    <Col>
                                        <SiDotnet size={50} title="ASP.Net"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaReact size={50} title="ReactJS"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaNode size={50} title="NodeJS"/>
                                        <Ratings value={4}/>
                                    </Col>
                                </Row>
                                <br/>
                            </div>
                        </div>  
                        <br/>
                        <br/> 
                    </Col>

                    <Col lg={6} className="wow bounceInLeft">
                        <div className="skills-box">
                            <div className="content text-white">
                                <h5>Version Control & Issue Tracking</h5>
                                <br/>
                                <br/>
                                <Row>
                                    <Col>
                                        <FaGitAlt size={50} title="Git"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <SiAzuredevops size={50} title="Azure DevOps"/>
                                        <Ratings value={3}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaBitbucket size={50} title="BitBucket"/>
                                        <Ratings value={3}/>
                                    </Col>
                                </Row>
                                <br/>
                                <br/>
                                <Row>
                                    <Col>
                                        <FaGithub size={50} title="GitHub"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <FaGitlab size={50} title="GitLab"/>
                                        <Ratings value={4}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <SiJira size={50} title="Jira"/>
                                        <Ratings value={3}/>
                                    </Col>
                                </Row>
                                <br/>
                            </div>
                        </div>  
                        <br/>
                        <br/> 
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} className="wow bounceInLeft">
                            <div className="skills-box">
                                <div className="content text-white">
                                    <h5>Cloud Services</h5>
                                    <br/>
                                    <br/>
                                    <Row>
                                        <Col>
                                            <FaAws size={50} title="Amazon Web Services"/>
                                            <Ratings value={3}/>
                                        </Col>
                                        <br/>
                                        <Col>
                                            <CgCloud size={50} title="Google Cloud Platform"/>
                                            <Ratings value={3}/>
                                        </Col>
                                        <br/>
                                    </Row>
                                </div>
                            </div>  
                            <br/>
                            <br/> 
                    </Col>
                    <Col lg={4} className="wow bounceInLeft">
                        <div className="skills-box">
                            <div className="content text-white">
                                <h5>DevOps & Tools</h5>
                                <br/>
                                <br/>
                                <Row>
                                    <Col>
                                        <FaDocker size={50} title="Docker"/>
                                        <Ratings value={3}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <SiSwagger size={50} title="Swagger"/>
                                        <Ratings value={3.5}/>
                                    </Col>
                                    <br/>
                                    <Col>
                                        <SiPostman size={50} title="Postman"/>
                                        <Ratings value={4}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>  
                        <br/>
                        <br/> 
                </Col>
                </Row>    
            </Container>
            <Certifications />
            <CertifiedSkills />
        </section>
        <br/><br/><br/><br/><br/>
        </>
    );
}
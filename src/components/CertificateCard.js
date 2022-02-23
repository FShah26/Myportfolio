import '../css/App.css';
import React  from 'react';
import {Card, Col} from 'react-bootstrap';
import {FaExternalLinkAlt,FaRegClock,FaLandmark} from 'react-icons/fa';


export default function CertificateCard(props){
    var imagePath = process.env.PUBLIC_URL + `/cert/${props.image}`;
    return(
            <Col md={4}>
                <Card className='certificate-box'>
                    <Card.Img variant="top" src={imagePath} style={{height:"200px",maxWidth:"350px",alignContent:"center"}} />
                    <Card.Body>
                    <Card.Title className="rating-star" style={{ height: "45px"}}>{props.title}</Card.Title>
                    <Card.Text>
                        <FaRegClock className='icon'/> <span className='text-white'>{props.issue}</span>
                        <br/>
                        <a href={props.organization_link} target="_blank" rel="noreferrer"><FaLandmark className='icon'/> <span className='text-white'>{props.organization}</span></a>
                        <br/>
                    </Card.Text> 
                    <Card.Text className='title text-white' style={{minHeight:"200px"}}>
                        {props.description}
                    </Card.Text>
                    <a href={props.certificate_link} target="_blank" rel="noreferrer">View Certificate <FaExternalLinkAlt /></a>
                    </Card.Body>
                </Card>
                <br/>
                <br/>
            </Col>
    );
}

import '../css/App.css';
import React from 'react';
import {Col} from 'react-bootstrap';
import {FaExternalLinkAlt, FaHackerrank} from 'react-icons/fa';
import {FcApproval} from 'react-icons/fc';

export default function SkillCertificationCard(props) {
    var imagePath = process.env.PUBLIC_URL + `/skillscert/${props.tech}`;
    return(
        <>
        <a href={props.link} target="_blank" rel="noreferrer">
            <Col xs={2} key={props.title} className="wow bounceInLeft">
            
                <div className="certified-skills-box" >
                    <div className="text-white">
                        <div className="accordion-item">
                        <FaHackerrank  size={25} title="HackerRank"/><FcApproval size={25}/>
                            <div className="accordion-title" style={{fontWeight:"bold"}}>
                             {props.title} 
                            </div>
                        </div>
                        <div  className="bottom-link" >View Certificate <FaExternalLinkAlt /></div>
                    </div>
                </div>
                <br/>
            </Col>
            </a>
        </>
    );
}
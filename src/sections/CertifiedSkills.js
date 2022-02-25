import '../css/App.css';
import React  from 'react';
import SkillCertificationConsumer from '../components/SkillCertificationConsumer';
import { Container } from 'react-bootstrap';

export default function CertifiedSkills(){
    return(
        <Container>
            <div className="separated container"></div>
            <div className="title text-white">
                <h3>Skills Verified</h3>
            </div>    
            <br/><br/><br/>
            <SkillCertificationConsumer />
            
        </Container>
    );
}

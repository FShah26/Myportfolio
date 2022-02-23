import '../css/App.css';
import React  from 'react';
import CertificateConsume from '../components/CertificateConsume';
import { Container } from 'react-bootstrap';

export default function Certifications(){
    return(
        <Container>
            <div className="separated container"></div>
            <div className="title text-white">
                <h3>Certifications</h3>
            </div>    
            <br/><br/><br/>
            <CertificateConsume />
            
        </Container>
    );
}

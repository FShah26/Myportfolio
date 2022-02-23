import '../css/App.css';
import React  from 'react';
import ExperienceConsumer from '../components/ExperienceConsumer';
import { Container } from 'react-bootstrap';

export default function ProfessionalExp(){
    
    
    return(
        <>
            <section id="experience" >
                <Container>
                    <div className="separated container"></div>
                    <div className="title text-white">
                        <h3>Professional Experience</h3>
                    </div>    
                    <br/><br/><br/>
                    <ExperienceConsumer />
                </Container>
            </section>
        </>

    );
}
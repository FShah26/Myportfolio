import '../css/App.css';
import React  from 'react';
import ProjectConsumer from '../components/ProjectConsumer';
import { Container } from 'react-bootstrap';

export default function Projects(){
    return(
        <>
            <section id="projects" >
                <Container>
                    <div className="separated container"></div>
                    <div className="title text-white">
                        <h3>Projects</h3>
                    </div>    
                    <br/><br/><br/>
                    <ProjectConsumer />
                </Container>
            </section>
        </>

    );
}
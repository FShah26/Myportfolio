import ProjectCard from './ProjectCard';
import {projects} from '../data/Data';
import { Row, Col } from 'react-bootstrap';

export default function ProjectConsumer(){
    const projectElements = [];
    for(var i=0;i<projects.length;i+=3)
    {
        projectElements.push(
        <Row key={i}>
          {
              projects.slice(i,i+3).map(({title,duration,description,techstack,subject})=>(
                <Col lg={4} key={title} className="wow bounceInLeft">
                    <div className="project-box">
                        <i className="icon icon-mobile"></i>
                        <div className="content text-white">
                            <ProjectCard title={title} description={description} subject={subject} techstack={techstack} duration={duration} className="text-white"/>
                        </div>
                    </div>
                    <br/>
                </Col>
            ))
          }
        </Row>
        )
    }

    return(
        <>
          {projectElements}
        </>
    );
}
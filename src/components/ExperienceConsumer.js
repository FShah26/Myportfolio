import ExperienceCard from './ExperienceCard';
import {experience} from '../data/Data';
import { Row, Col } from 'react-bootstrap';

export default function ExperienceConsumer(){
    const exp = [];
    for(var i=0;i<experience.length;i+=3)
    {
        exp.push(
            <Row key={i}>
                {
                    experience.slice(i,i+3).map(({title,company,duration,content})=>(
                            <Col lg={4} key={title} className="wow bounceInLeft">
                                <div className="box1">
                                    <i className="icon icon-mobile"></i>
                                    <div className="content text-white">
                                        <ExperienceCard  title={title} content={content} company={company} duration={duration} className="text-white"/>
                                    </div>
                                </div>
                                <br/>
                            </Col>
                        ))
                }
            </Row>
        )
    }

    return (
        <>
          {exp}
        </>
      );
}
import React, { useState } from 'react';
import {FaBookOpen, FaRegClock,FaRegLightbulb} from 'react-icons/fa';

const ProjectCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" style={{fontWeight:"bold"}} onClick={() => setIsActive(!isActive)}>
        <div><FaRegLightbulb/> {props.title}</div>
        <div><FaBookOpen/> {props.subject}</div>
        <div><FaRegClock/> {props.duration}</div>       
        <br/><br/>
        <div> Description
            {isActive?  String.fromCharCode(9650) :  String.fromCharCode(9660)}
        </div>
      </div>
      <br/>
      {isActive && <div className="accordion-content" style={{ whiteSpace: "pre-line", height:"150px", overflowX:"hidden", overflowY:"scroll" }}>{props.description.split("<br/>").join("\n")}</div>}
      <div>
          {props.techstack.split(",").map(tech =>
            <span key={tech} className="subjects">
                {tech}
            </span>
        )}
      </div>    
    </div>
  );
};

export default ProjectCard;
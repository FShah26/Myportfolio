import React, { useState } from 'react';
import {FaLandmark, FaUserCircle, FaRegClock} from 'react-icons/fa';
const ExperienceCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" style={{fontWeight:"bold"}} onClick={() => setIsActive(!isActive)}>
        <div><FaUserCircle/> {props.title}</div>
        <div><FaLandmark/> {props.company}</div>
        <div><FaRegClock/> {props.duration}</div>

        <div> Responsibilities
            {isActive?  String.fromCharCode(9650) :  String.fromCharCode(9660)}
        </div>
      </div>
      <br/>
      <br/>
      {isActive && <div className="accordion-content" style={{ whiteSpace: "pre-line", height:"200px" ,overflowY:"scroll" }}>{props.content.split("<br/>").join("\n")}</div>}
    </div>
  );
};

export default ExperienceCard;
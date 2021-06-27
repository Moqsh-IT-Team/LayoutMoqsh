import React from 'react';
import "../SpeakerSection.scss";
const Card1=props=>{
    return(
    <div className="card text-center shadow ">
        <div className="overflow">
            <img src={props.imgsrc} alt='Speaker' className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
            <h1 className="card-title">{props.title}</h1>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!
            </p>
            <a href="https://moqshsnu.netlify.app/" className="btn btn-outline-success">View More</a>
        </div>
    </div>
);
}

export default Card1;

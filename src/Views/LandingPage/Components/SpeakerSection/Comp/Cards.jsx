import React, {Component} from 'react'
import Card1 from './CardUI';
import img1 from"../../../../../Assets/Temp/SpeakerLeft.jpeg";
import img2 from"../../../../../Assets/Temp/SpeakerMiddle.jpeg";
import img3 from"../../../../../Assets/Temp/SpeakerRight.jpeg";


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4">
                        <Card1 imgsrc={img1} title="Speaker1"/>
                    </div>
                    <div className="col-md-4">
                        <Card1 imgsrc={img2} title="Speaker2"/>
                    </div>
                    <div className="col-md-4">
                        <Card1 imgsrc={img3} title="Speaker3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
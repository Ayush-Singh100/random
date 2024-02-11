import React, { useState } from "react";
import "./Card.css";
import MyModal from "./MyModal";
import dataObj from "./AboutMovies";

const Card = (props) => {

    const [modal, setModal] = useState(false);

    const passModal = () => {
        setModal(false)
    }

    const anonym=()=>{
        switch (props.sname) {
            case "Game of Thrones":
                 return dataObj[0]
                ;
            case "Stranger Things":
                 return dataObj[1]
                ;
            case "The Walking Dead":
                 return dataObj[2]
                ;
            case "Money Heist":
                return dataObj[3]
                ;
            case "Mirzapur":
                return dataObj[4]
                ;
            case "Squid Games":
                 return dataObj[5]
                ;
            case "Vikings":
                 return dataObj[6]
                ;
            case "Breaking Bad":
                 return dataObj[7]
                ;
            case "The Boys":
                 return dataObj[8]
                ;
            case "Lucifer":
                 return dataObj[9]
                ;
            case "Prison Break":
                 return dataObj[10]
                ;
        
            default:return "Some error occured"
                ;
        }
        

    }

    return (
        <>
            {modal && <MyModal passedFunc={passModal} data={anonym}/>}
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="Nothing found" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.sname}</p>
                    <button className="btn btn-outline-info" onClick={() => { setModal(true) }}>About</button>
                    <button className="btn btn-outline-success" ><a href={props.link} target="blank">Watch</a></button>
                </div>
            </div>
        </>
    );
};

export default Card;

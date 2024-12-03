import React, { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import comet from "../assets/comet.png"

export function DetailedButton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/detailedQuestions");
    };
    return (
        // <Button className = "detailed-button" onClick={handleClick}>
        //     Detailed Questions
        // </Button>
        <div className="detailed-button" onClick={handleClick} style={{ backgroundImage: `url(${comet})` }} title="Detailed Questions"/>
    );
};
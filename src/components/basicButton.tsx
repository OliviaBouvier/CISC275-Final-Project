import React, { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import shootingStar from "../assets/shooting_star.png"

export function BasicButton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/basicQuestions");
    };
    return (
        // <Button className = "basic-button" onClick={handleClick}>
        //     Basic Questions
        // </Button>
        <div className="basic-button" onClick={handleClick} style={{ backgroundImage: `url(${shootingStar})` }} title="Basic Questions"/>
    );
};


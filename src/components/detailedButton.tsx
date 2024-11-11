import React, { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function DetailedButton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/detailedQuestions");
    };
    return (
        <Button className = "detailed-button" onClick={handleClick}>
            Detailed Questions
        </Button>
    );
};
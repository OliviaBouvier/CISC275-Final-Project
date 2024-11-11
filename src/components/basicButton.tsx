import React, { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function BasicButton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/basicQuestions");
    };
    return (
        <Button className = "basic-button" onClick={handleClick}>
            Basic Questions
        </Button>
    );
};


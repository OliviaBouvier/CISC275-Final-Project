import React, { useState } from "react";
import { Form } from "react-bootstrap";

let chatGPTcontents: string = "";

export function ChangeQuestionOneB(): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("Select an answer");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswer(newAnswer);

        if (chatGPTcontents.includes("My level of education is")) {
            chatGPTcontents = chatGPTcontents.replace(
                /My level of education is .+?(\. |$)/, 
                `My level of education is ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `My level of education is ${newAnswer}. `;
        }
    }
    

    const answers = [
        { id: "high school" },
        { id: "Bachelor's degree" },
        { id: "Master's degree" },
        { id: "PhD" },
    ];

    return (
        <div>
            <div>
                Question One: Mock question....
            </div>
            {answers.map((answersList) => (
                <Form.Check
                    inline
                    key={answersList.id}
                    type="radio"
                    name="BasicQuestionOne"
                    onChange={updateAnswer}
                    id={`answer-check-${answersList.id}`}
                    label={answersList.id}
                    value={answersList.id}
                    checked={answer === answersList.id}
                />
            ))}

            <div>
                You have picked the answer: {answer}
            </div>
        </div>
    );
}
export function ChangeQuestionTwoB(): React.JSX.Element {
    const [answerTwo, setChangeAnswerTwo] = useState<string>("Select an answer");

    function updateAnswerTwo(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerTwo(newAnswer);

        if (chatGPTcontents.includes("I want to pursue a career in")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I want to pursue a career in .+?(\. |$)/, 
                `I want to pursue a career in ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I want to pursue a career in ${newAnswer}. `;
        }
    }

    const answersTwo = [
        { id: "technology" },
        { id: "healthcare" },
        { id: "construction" },
        { id: "business" },
    ];

    return (
        <div>
            <div>
                Question Two: Mock question....
            </div>
            {answersTwo.map((answersListTwo) => (
                <Form.Check
                    inline
                    key={answersListTwo.id}
                    type="radio"
                    name="BasicQuestionTwo"
                    onChange={updateAnswerTwo}
                    id={`answer-check-${answersListTwo.id}`}
                    label={answersListTwo.id}
                    value={answersListTwo.id}
                    checked={answerTwo === answersListTwo.id}
                />
            ))}
            <div>
                You have picked the answer: {answerTwo}
            </div>
        </div>
    );
}
export function ChangeQuestionThreeB(): React.JSX.Element {
    const [answerThree, setChangeAnswerThree] = useState<string>("Select an answer");

    function updateAnswerThree(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerThree(newAnswer);

        if (chatGPTcontents.includes("To answer the question as to whether I've taken a career quiz before, I would say")) {
            chatGPTcontents = chatGPTcontents.replace(
                /To answer the question as to whether I've taken a career quiz before, I would say .+?(\. |$)/, 
                `To answer the question as to whether I've taken a career quiz before, I would say ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `To answer the question as to whether I've taken a career quiz before, I would say ${newAnswer}. `;
        }
    }

    const answersThree = [
        { id: "yes, within the past year" },
        { id: "yes, but a while ago" },
        { id: "no" },
        { id: "I don't remember" },
    ];

    return (
        <div>
            <div>
                Question Three: Mock question....
            </div>
            {answersThree.map((answersListThree) => (
                <Form.Check
                    inline
                    key={answersListThree.id}
                    type="radio"
                    name="BasicQuestionThree"
                    onChange={updateAnswerThree}
                    id={`answer-check-${answersListThree.id}`}
                    label={answersListThree.id}
                    value={answersListThree.id}
                    checked={answerThree === answersListThree.id}
                />
            ))}
            <div>
                You have picked the answer: {answerThree}
            </div>
        </div>
    );
}
export function ChangeQuestionOneFourB(): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("Select an answer");

    function updateAnswerFour(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerFour(newAnswer);

        if (chatGPTcontents.includes("I would describe my personality as")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I would describe my personality as .+?(\. |$)/, 
                `I would describe my personality as ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I would describe my personality as ${newAnswer}. `;
        }
    }

    const answersFour = [
        { id: "outgoing" },
        { id: "shy" },
        { id: "adventurous" },
        { id: "creative" },
    ];

    return (
        <div>
            <div>
                Question Four: Mock question....
            </div>
            {answersFour.map((answersListFour) => (
                <Form.Check
                    inline
                    key={answersListFour.id}
                    type="radio"
                    name="BasicQuestionFour"
                    onChange={updateAnswerFour}
                    id={`answer-check-${answersListFour.id}`}
                    label={answersListFour.id}
                    value={answersListFour.id}
                    checked={answerFour === answersListFour.id}
                />
            ))}
            <div>
                You have picked the answer: {answerFour}
            </div>
        </div>
    );
}
export function ChangeQuestionOneFiveB(): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("Select an answer");

    function updateAnswerFive(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerFive(newAnswer);

        if (chatGPTcontents.includes("In school, I enjoyed")) {
            chatGPTcontents = chatGPTcontents.replace(
                /In school, I enjoyed .+?(\. |$)/, 
                `In school, I enjoyed ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `In school, I enjoyed ${newAnswer}. `;
        }
    }

    const answersFive = [
        { id: "math/science" },
        { id: "history" },
        { id: "art/music" },
        { id: "English" },
    ];

    return (
        <div>
            <div>
                Question Five: Mock question....
            </div>
            {answersFive.map((answersListFive) => (
                <Form.Check
                    inline
                    key={answersListFive.id}
                    type="radio"
                    name="BasicQuestionFive"
                    onChange={updateAnswerFive}
                    id={`answer-check-${answersListFive.id}`}
                    label={answersListFive.id}
                    value={answersListFive.id}
                    checked={answerFive === answersListFive.id}
                />
            ))}
            <div>
                You have picked the answer: {answerFive}
            </div>
        </div>
    );
}
export function ChangeQuestionOneSixB(): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("Select an answer");

    function updateAnswerSix(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerSix(newAnswer);

        if (chatGPTcontents.includes("I prefer working in a")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I prefer working in a .+?(\. |$)/, 
                `I prefer working in a ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I prefer working in a ${newAnswer}. `;
        }
    }

    const answersSix = [
        { id: "structure office setting" },
        { id: "open workspace" },
        { id: "fast-paced, dynamic environment" },
        { id: "quiet space" },
    ];

    return (
        <div>
            <div>
                Question Six: Mock question....
            </div>
            {answersSix.map((answersListSix) => (
                <Form.Check
                    inline
                    key={answersListSix.id}
                    type="radio"
                    name="BasicQuestionSix"
                    onChange={updateAnswerSix}
                    id={`answer-check-${answersListSix.id}`}
                    label={answersListSix.id}
                    value={answersListSix.id}
                    checked={answerSix === answersListSix.id}
                />
            ))}
            <div>
                You have picked the answer: {answerSix}
            </div>
        </div>
    );
}
export function ChangeQuestionOneSevenB(): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("Select an answer");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerSeven(newAnswer);

        if (chatGPTcontents.includes("I am naturally good at")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I am naturally good at .+?(\. |$)/, 
                `I am naturally good at ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I am naturally good at ${newAnswer}. `;
        }
    }

    const answersSeven = [
        { id: "solving problems" },
        { id: "being creative" },
        { id: "communicating with others" },
        { id: "managing details and plans" },
    ];

    return (
        <div>
            <div>
                Question Seven: Mock question....
            </div>
            {answersSeven.map((answersListSeven) => (
                <Form.Check
                    inline
                    key={answersListSeven.id}
                    type="radio"
                    name="BasicQuestionSeven"
                    onChange={updateAnswerSeven}
                    id={`answer-check-${answersListSeven.id}`}
                    label={answersListSeven.id}
                    value={answersListSeven.id}
                    checked={answerSeven === answersListSeven.id}
                />
            ))}
            {/* {chatGPTcontents += `I am naturally good at ${answerSeven}`} */}
            <div>
                You have picked the answer: {answerSeven}
            </div>
        </div>
    );
}

export function ChatGPTContents(){
    return chatGPTcontents;
}
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeQuestionOneB(): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("Select an answer");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswer(event.target.value);
    }

    const answers = [
        { id: "temp1" },
        { id: "temp2" },
        { id: "temp3" },
        { id: "temp4" },
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
        setChangeAnswerTwo(event.target.value);
    }

    const answersTwo = [
        { id: "temp5" },
        { id: "temp6" },
        { id: "temp7" },
        { id: "temp8" },
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
        setChangeAnswerThree(event.target.value);
    }

    const answersThree = [
        { id: "temp9" },
        { id: "temp10" },
        { id: "temp11" },
        { id: "temp12" },
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
        setChangeAnswerFour(event.target.value);
    }

    const answersFour = [
        { id: "temp13" },
        { id: "temp14" },
        { id: "temp15" },
        { id: "temp16" },
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
        setChangeAnswerFive(event.target.value);
    }

    const answersFive = [
        { id: "temp17" },
        { id: "temp18" },
        { id: "temp19" },
        { id: "temp20" },
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
        setChangeAnswerSix(event.target.value);
    }

    const answersSix = [
        { id: "temp21" },
        { id: "temp22" },
        { id: "temp23" },
        { id: "temp24" },
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
        setChangeAnswerSeven(event.target.value);
    }

    const answersSeven = [
        { id: "temp25" },
        { id: "temp26" },
        { id: "temp27" },
        { id: "temp28" },
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

            <div>
                You have picked the answer: {answerSeven}
            </div>
        </div>
    );
}
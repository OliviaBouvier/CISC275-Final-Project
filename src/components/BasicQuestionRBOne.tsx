import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeQuestionOneB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswer(event.target.value);
        setAnswer(event.target.value);
    }

    const answers = [
        { id: "High school" },
        { id: "Undergraduate" },
        { id: "Bachelors degree" },
        { id: "Masters degree" },
        { id: "PhD" }
    ];

    return (
        <div>
            <div>
                What is your current level of education?
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
export function ChangeQuestionTwoB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answerTwo, setChangeAnswerTwo] = useState<string>("");

    function updateAnswerTwo(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswerTwo(event.target.value);
        setAnswer(event.target.value);
    }

    const answersTwo = [
        { id: "Technology field" },
        { id: "Medicla field" },
        { id: "Business field" },
        { id: "Teaching field" },
        { id: "Trades (Plumbing, HVAC, etc)" },
        { id: "Other" }
    ];

    return (
        <div>
            <div>
                What career category would you most likely pursue?
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
export function ChangeQuestionThreeB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answerThree, setChangeAnswerThree] = useState<string>("");

    function updateAnswerThree(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswerThree(event.target.value);
        setAnswer(event.target.value);
    }

    const answersThree = [
        { id: "Yes" },
        { id: "No" },
        { id: "Yes, but over a year ago" },
    ];

    return (
        <div>
            <div>
                Have you taken a career quiz before?
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
export function ChangeQuestionOneFourB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("");

    function updateAnswerFour(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswerFour(event.target.value);
        setAnswer(event.target.value);
    }

    const answersFour = [
        { id: "Outgoing" },
        { id: "Shy" },
        { id: "Creative" },
        { id: "Adventurous" },
        { id: "Focused" }
    ];

    return (
        <div>
            <div>
                What describes your personality the best?
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
export function ChangeQuestionOneFiveB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("");

    function updateAnswerFive(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswerFive(event.target.value);
        setAnswer(event.target.value);
    }

    const answersFive = [
        { id: "Math" },
        { id: "Science" },
        { id: "History" },
        { id: "English" },
        { id: "Art" }
    ];

    return (
        <div>
            <div>
                What subject did you most enjoy in school?
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
export function ChangeQuestionOneSixB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("");

    function updateAnswerSix(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswerSix(event.target.value);
        setAnswer(event.target.value);
    }

    const answersSix = [
        { id: "Structured" },
        { id: "Open" },
        { id: "Fast-Paced" },
        { id: "Quiet/Focused" },
    ];

    return (
        <div>
            <div>
                What is your preferred work environment?
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
export function ChangeQuestionOneSevenB({
    setAnswer,
  }: {
    setAnswer: (value: string) => void;
  }): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeAnswerSeven(event.target.value);
        setAnswer(event.target.value);
    }

    const answersSeven = [
        { id: "Solving Problems" },
        { id: "Being creative" },
        { id: "Communicating" },
        { id: "Managing plans/people" },
    ];

    return (
        <div>
            <div>
                What are you most naturally good at?
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
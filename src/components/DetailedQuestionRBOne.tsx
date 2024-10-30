import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeQuestionOneDT({
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
        { id: "Five (Great)" },
        { id: "Four" },
        { id: "Three (Neutral)" },
        { id: "Two " },
        { id: "One (Not great)" }
    ];

    return (
        <div>
            <div>
                One being the least and five being the best, how good is your work ethic?   
            </div>
            {answers.map((answersList) => (
                <Form.Check
                    inline
                    key={answersList.id}
                    type="radio"
                    name="DetailedQuestionOne"
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
export function ChangeQuestionTwoDT({
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
        { id: "Five (Great)" },
        { id: "Four" },
        { id: "Three (Neutral)" },
        { id: "Two " },
        { id: "One (Not great)" }
    ];

    return (
        <div>
            <div>
                One being the least and five being the best, how good would your peers say your work ethic is?
            </div>
            {answersTwo.map((answersListTwo) => (
                <Form.Check
                    inline
                    key={answersListTwo.id}
                    type="radio"
                    name="DetailedQuestionTwo"
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
export function ChangeQuestionThreeDT({
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
        { id: "Technology Field" },
        { id: "Medical Field" },
        { id: "Science Field" },
        { id: "Teaching" },
        { id: "Trades" },
        { id: "Manual Labor"}
    ];

    return (
        <div>
            <div>
                Choose whichever career field you would most likely pursue
            </div>
            {answersThree.map((answersListThree) => (
                <Form.Check
                    inline
                    key={answersListThree.id}
                    type="radio"
                    name="DetailedQuestionThree"
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
export function ChangeQuestionOneFourDT({
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
        { id: "On my own" },
        { id: "In a group" },
    ];

    return (
        <div>
            <div>
                If you had a choice of working on your own or as a group which would your choose?
            </div>
            {answersFour.map((answersListFour) => (
                <Form.Check
                    inline
                    key={answersListFour.id}
                    type="radio"
                    name="DetailedQuestionFour"
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
export function ChangeQuestionOneFiveDT({
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
        { id: "High stress, always something going on" },
        { id: "Laid back, little to no stress" },
        { id: "Bouncing between high and low stress" },
        { id: "Right in the middle of high and low stress" },
    ];

    return (
        <div>
            <div>
                What kind of work environment would best suit you?
            </div>
            {answersFive.map((answersListFive) => (
                <Form.Check
                    inline
                    key={answersListFive.id}
                    type="radio"
                    name="DetailedQuestionFive"
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
export function ChangeQuestionOneSixDT({
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
        { id: "Very outgoing, love to be around others" },
        { id: "Don't mind being around people or alone but prefer to be around people" },
        { id: "Don't mind being around people or alone but prefer to be alone" },
        { id: "Don't like being around other people at all" },
    ];

    return (
        <div>
            <div>
                How would you describe your personality?
            </div>
            {answersSix.map((answersListSix) => (
                <Form.Check
                    inline
                    key={answersListSix.id}
                    type="radio"
                    name="DetailedQuestionSix"
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
export function ChangeQuestionOneSevenDT({
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
        { id: "Docture/nurse" },
        { id: "Plumber" },
        { id: "Construction" },
        { id: "Teacher" },
        { id: "IT" },
        { id: "Chemical scientist" },
        { id: "archaeologist" }
    ];

    return (
        <div>
            <div>
                Out of all the jobs listed, which would you want to be the most?
            </div>
            {answersSeven.map((answersListSeven) => (
                <Form.Check
                    inline
                    key={answersListSeven.id}
                    type="radio"
                    name="DetailedQuestionSeven"
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
import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import { ChatGPT } from "./chatgpt";

let chatGPTcontents: string = "";

interface RadioButtonsProps{
    apiKey: string;
}

export function RadioButtons({apiKey}: RadioButtonsProps){
const[contents, setContents] = useState<string>("");

const [answer1, setAnswer1] = useState<string>("");
    const [answer2, setAnswer2] = useState<string>("");
    const [answer3, setAnswer3] = useState<string>("");
    const [answer4, setAnswer4] = useState<string>("");
    const [answer5, setAnswer5] = useState<string>("");
    const [answer6, setAnswer6] = useState<string>("");
    const [answer7, setAnswer7] = useState<string>("");

    const feedback=[answer1,answer2,answer3,answer4,answer5,answer6,answer7].filter(Boolean).length;
    const progress=(feedback/7)*100;
    const completed=progress===100;


function ChangeQuestionOneB(): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("Select an answer");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswer(newAnswer);
        setAnswer1(newAnswer);

        if (chatGPTcontents.includes("My level of education is")) {
            chatGPTcontents = chatGPTcontents.replace(
                /My level of education is .+?(\. |$)/, 
                `My level of education is ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `My level of education is ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    

    const answers = [
        { id: "high school" },
        { id: "Undergraduate" },
        { id: "Bachelor's degree" },
        { id: "Master's degree" },
        { id: "PhD" },
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

        <div>You have picked the answer: {answer}</div>
      </div>
    );
}
function ChangeQuestionTwoB(): React.JSX.Element {
    const [answerTwo, setChangeAnswerTwo] = useState<string>("Select an answer");

    function updateAnswerTwo(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerTwo(newAnswer);
        setAnswer2(newAnswer);

        if (chatGPTcontents.includes("I want to pursue a career in")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I want to pursue a career in .+?(\. |$)/, 
                `I want to pursue a career in ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I want to pursue a career in ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }

    const answersTwo = [
        { id: "Technological field" },
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
function ChangeQuestionThreeB(): React.JSX.Element {
    const [answerThree, setChangeAnswerThree] = useState<string>("Select an answer");

    function updateAnswerThree(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerThree(newAnswer);
        setAnswer3(newAnswer);

        if (chatGPTcontents.includes("To answer the question as to whether I've taken a career quiz before, I would say")) {
            chatGPTcontents = chatGPTcontents.replace(
                /To answer the question as to whether I've taken a career quiz before, I would say .+?(\. |$)/, 
                `To answer the question as to whether I've taken a career quiz before, I would say ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `To answer the question as to whether I've taken a career quiz before, I would say ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }

    const answersThree = [
        { id: "Yes, within the past year" },
        { id: "Yes, but a while ago" },
        { id: "No" },
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
function ChangeQuestionOneFourB(): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("Select an answer");

    function updateAnswerFour(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerFour(newAnswer);
        setAnswer4(newAnswer);

        if (chatGPTcontents.includes("I would describe my personality as")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I would describe my personality as .+?(\. |$)/, 
                `I would describe my personality as ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I would describe my personality as ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
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
function ChangeQuestionOneFiveB(): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("Select an answer");

    function updateAnswerFive(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerFive(newAnswer);
        setAnswer5(newAnswer);

        if (chatGPTcontents.includes("In school, I enjoyed")) {
            chatGPTcontents = chatGPTcontents.replace(
                /In school, I enjoyed .+?(\. |$)/, 
                `In school, I enjoyed ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `In school, I enjoyed ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
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
function ChangeQuestionOneSixB(): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("Select an answer");

    function updateAnswerSix(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerSix(newAnswer);
        setAnswer6(newAnswer);

        if (chatGPTcontents.includes("I prefer working in a")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I prefer working in a .+?(\. |$)/, 
                `I prefer working in a ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I prefer working in a ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
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
function ChangeQuestionOneSevenB(): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("Select an answer");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerSeven(newAnswer);
        setAnswer7(newAnswer);

        if (chatGPTcontents.includes("I am naturally good at")) {
            chatGPTcontents = chatGPTcontents.replace(
                /I am naturally good at .+?(\. |$)/, 
                `I am naturally good at ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `I am naturally good at ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
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
            {/* {chatGPTcontents += `I am naturally good at ${answerSeven}`} */}
            <div>
                You have picked the answer: {answerSeven}
            </div>
        </div>
    );
}

function ChatGPTContents(){
    return contents;
}

return(
    <div style={{ position: 'relative', width: '80%', margin: '0 auto', textAlign: 'center' }}>           
             {/* Container for the questions and lines */}
             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                 {/* Left column of questions */}
                 <div style={{ width: '45%', textAlign: 'center' }}>
                     <div>{ChangeQuestionOneB()}</div>
                     <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                     <div>{ChangeQuestionThreeB()}</div>
                     <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                     <div>{ChangeQuestionOneFiveB()}</div>
                 </div>
                 {/* Vertical Line */}
                 <div style={{ width: '10px', display: 'flex', alignItems: 'center' }}>
                     <div
                         style={{
                             height: '115%',
                             borderLeft: '3px solid grey',
                             marginLeft: '5px',
                         }}
                     ></div>
                 </div>

                 {/* Right column of questions */}
                 <div style={{ width: '45%', textAlign: 'center' }}>
                     <div>{ChangeQuestionTwoB()}</div>
                     <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                     <div>{ChangeQuestionOneFourB()}</div>
                     <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                     <div>{ChangeQuestionOneSixB()}</div>
                 </div>
             </div>

             {/* Question 7 with surrounding box */}
             <div style={{  display: 'inline-block', padding: '20px', textAlign: 'center' }}>
                 {/* Box with thicker bottom line */}
                 <div style={{ 
                     border: '3px solid grey', 
                     padding: '20px', 
                     display: 'inline-block', 
                     width: '60%' 
                 }}>
                     {ChangeQuestionOneSevenB()}
                 </div>
             </div>
             <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="progressBar"></ProgressBar>
        <pre></pre>
        {completed && (
        <div className="feedback">
          <h4>Quiz completed!</h4>
        </div>
      )}
    <ChatGPT apiKey = {apiKey} chatGPTcontents={ChatGPTContents()}/>
</div>)
}

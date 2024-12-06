import React, { useState, useEffect } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import { ChatGPT } from "./chatgpt";
import confetti from "canvas-confetti";

let chatGPTcontents: string = "";

interface BasicMultipleChoiceProps{
    apiKey: string;
}

export function BasicMultipleChoice({apiKey}: BasicMultipleChoiceProps){
const[contents, setContents] = useState<string>("");

    const [answer1, setAnswer1] = useState<string>("");
    const [answer2, setAnswer2] = useState<string>("");
    const [answer3, setAnswer3] = useState<string>("");
    const [answer4, setAnswer4] = useState<string>("");
    const [answer5, setAnswer5] = useState<string>("");
    const [answer6, setAnswer6] = useState<string>("");
    const [answer7, setAnswer7] = useState<string>("");
    const [answer8, setAnswer8] = useState<string>("");
    const [answer9, setAnswer9] = useState<string>("");
    const [answer10, setAnswer10] = useState<string>("");
    const [answer11, setAnswer11] = useState<string>("");
    const [answer12, setAnswer12] = useState<string>("");
    const [answer13, setAnswer13] = useState<string>("");
    const [answer14, setAnswer14] = useState<string>("");

    const feedback=[answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14].filter(Boolean).length;
    const progress=(feedback/14)*100;
    const completed=progress===100;

    const launch=()=>{confetti({particleCount:750,spread:150,origin:{y:0.6}})}
    useEffect(()=>{
        if(completed){
            launch();
        }
    }, [completed]);



function ChangeQuestionOneB(): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "High School" },
        { id: "Bachelor's degree" },
        { id: "Master's degree" },
        { id: "PhD" },
    ];

    return (
        <div>
            <div>
            What is your current level of education?
            </div>
            <select value={answer} onChange={updateAnswer}>
                <option disabled></option>
                {answers.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answer}</div>
      </div>
    );
}
function ChangeQuestionTwoB(): React.JSX.Element {
    const [answerTwo, setChangeAnswerTwo] = useState<string>("");

    function updateAnswerTwo(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "Technology" },
        { id: "Healthcare" },
        { id: "Construction" },
        { id: "Business" },
        { id: "Education"},
        { id: "Law"},
        { id: "I'm not sure"},
    ];

    return (
        <div>
            <div>
            What career category would you most likely pursue?
            </div>
            <select value={answerTwo} onChange={updateAnswerTwo}>
                <option disabled></option>
                {answersTwo.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>
                You have picked the answer: {answerTwo}
            </div>
        </div>
    );
}
function ChangeQuestionThreeB(): React.JSX.Element {
    const [answerThree, setChangeAnswerThree] = useState<string>("");

    function updateAnswerThree(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "I don't remember" },
    ];

    return (
        <div>
            <div>
            Have you taken a career quiz before?
            </div>
            <select value={answerThree} onChange={updateAnswerThree}>
                <option disabled></option>
                {answersThree.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>
                You have picked the answer: {answerThree}
            </div>
        </div>
    );
}
function ChangeQuestionFourB(): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("");

    function updateAnswerFour(event: React.ChangeEvent<HTMLSelectElement>) {
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
            <select value={answerFour} onChange={updateAnswerFour}>
                <option disabled></option>
                {answersFour.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>
                You have picked the answer: {answerFour}
            </div>
        </div>
    );
}
function ChangeQuestionFiveB(): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("");

    function updateAnswerFive(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "Art" },
        { id: "Physical Education"}
    ];

    return (
        <div>
            <div>
                What subject did you most enjoy in school?
            </div>
            <select value={answerFive} onChange={updateAnswerFive}>
                <option disabled></option>
                {answersFive.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>
                You have picked the answer: {answerFive}
            </div>
        </div>
    );
}
function ChangeQuestionSixB(): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("");

    function updateAnswerSix(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "Structured office setting" },
        { id: "Open workspace" },
        { id: "Fast-paced, dynamic environment" },
        { id: "Quiet space" },
    ];

    return (
        <div>
            <div>
                What is your preferred work environment?
            </div>
            <select value={answerSix} onChange={updateAnswerSix}>
                <option disabled></option>
                {answersSix.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>
                You have picked the answer: {answerSix}
            </div>
        </div>
    );
}
function ChangeQuestionSevenB(): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "Solving problems" },
        { id: "Being creative" },
        { id: "Communicating" },
        { id: "Managing plans/people" },
    ];

    return (
        <div>
            <div>
                What are you most naturally good at?
            </div>
            <select value={answerSeven} onChange={updateAnswerSeven}>
                <option disabled></option>
                {answersSeven.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>
                You have picked the answer: {answerSeven}
            </div>
        </div>
    );
}
function ChangeQuestionEightB(): React.JSX.Element {
    const [answerEight, setChangeAnswerEight] = useState<string>("");

    function updateAnswerEight(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerEight(newAnswer);
        setAnswer8(newAnswer);

        if (chatGPTcontents.includes("Who do you like working with more?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /Who do you like working with more? .+?(\. |$)/, 
                `Who do you like working with more? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `Who do you like working with more? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersEight = [
        { id: "Kids" },
        { id: "Adults" },
    ];

    return (
        <div>
            <div>
            Who do you like working with more?
            </div>
            <select value={answerEight} onChange={updateAnswerEight}>
                <option disabled></option>
                {answersEight.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>

        <div>You have picked the answer: {answerEight}</div>
      </div>
    );
}
function ChangeQuestionNineB(): React.JSX.Element {
    const [answerNine, setChangeAnswerNine] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerNine(newAnswer);
        setAnswer9(newAnswer);

        if (chatGPTcontents.includes("Do you prefer working indoors or outdoors?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /Do you prefer working indoors or outdoors? .+?(\. |$)/, 
                `Do you prefer working indoors or outdoors? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `Do you prefer working indoors or outdoors? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersNine = [
        { id: "Indoors" },
        { id: "Outdoors" },
    ];

    return (
        <div>
            <div>
            Do you prefer working indoors or outdoors?
            </div>
            <select value={answerNine} onChange={updateAnswer}>
                <option disabled></option>
                {answersNine.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
            <div>You have picked the answer: {answerNine}</div>
      </div>
    );
}
function ChangeQuestionTenB(): React.JSX.Element {
    const [answerTen, setChangeAnswerTen] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerTen(newAnswer);
        setAnswer10(newAnswer);

        if (chatGPTcontents.includes("Do you like solving problems?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /Do you like solving problems? .+?(\. |$)/, 
                `Do you like solving problems? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `Do you like solving problems? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersTen = [
        { id: "Yes" },
        { id: "No" },
    ];

    return (
        <div>
            <div>
            Do you like solving problems?
            </div>
            <select value={answerTen} onChange={updateAnswer}>
                <option disabled></option>
                {answersTen.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answerTen}</div>
      </div>
    );
}
function ChangeQuestionElevenB(): React.JSX.Element {
    const [answerEleven, setChangeAnswerEleven] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerEleven(newAnswer);
        setAnswer11(newAnswer);

        if (chatGPTcontents.includes("Does job salary matter to you?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /Does job salary matter to you? .+?(\. |$)/, 
                `Does job salary matter to you? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `Does job salary matter to you? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersEleven = [
        { id: "Yes" },
        { id: "No" },
    ];

    return (
        <div>
            <div>
            Does job salary matter to you?
            </div>
            <select value={answerEleven} onChange={updateAnswer}>
                <option disabled></option>
                {answersEleven.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answerEleven}</div>
      </div>
    );
}
function ChangeQuestionTwelveB(): React.JSX.Element {
    const [answerTwelve, setChangeAnswerTwelve] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerTwelve(newAnswer);
        setAnswer12(newAnswer);

        if (chatGPTcontents.includes("Do you want to travel for your job?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /Do you want to travel for your job? .+?(\. |$)/, 
                `Do you want to travel for your job? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `Do you want to travel for your job? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersTwelve = [
        { id: "Yes" },
        { id: "No" },
        { id: "It doesn't matter if I do or don't travel" }
    ];

    return (
        <div>
            <div>
            Do you want to travel for your job?
            </div>
            <select value={answerTwelve} onChange={updateAnswer}>
                <option disabled></option>
                {answersTwelve.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answerTwelve}</div>
      </div>
    );
}
function ChangeQuestionThirteenB(): React.JSX.Element {
    const [answerThirteen, setChangeAnswerThirteen] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerThirteen(newAnswer);
        setAnswer13(newAnswer);

        if (chatGPTcontents.includes("Are you more hands on or theoretical?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /Are you more hands on or theoretical? .+?(\. |$)/, 
                `Are you more hands on or theoretical? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `Are you more hands on or theoretical? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersThirteen = [
        { id: "Hands on" },
        { id: "Theoretical" },
        { id: "Both" }
    ];

    return (
        <div>
            <div>
            Are you more hands on or theoretical?
            </div>
            <select value={answerThirteen} onChange={updateAnswer}>
                <option disabled></option>
                {answersThirteen.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answerThirteen}</div>
      </div>
    );
}
function ChangeQuestionFourteenB(): React.JSX.Element {
    const [answerFourteen, setChangeAnswerFourteen] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value; // Use the new answer directly
        setChangeAnswerFourteen(newAnswer);
        setAnswer14(newAnswer);

        if (chatGPTcontents.includes("What is your ideal work schedule?")) {
            chatGPTcontents = chatGPTcontents.replace(
                /What is your ideal work schedule? .+?(\. |$)/, 
                `What is your ideal work schedule? ${newAnswer}. `
            );
        } else {
            chatGPTcontents += `My ideal work schedule is ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }
    const answersFourteen = [
        { id: "9-5" },
        { id: "8-4" },
        { id: "Work from home" },
        { id: "asynchronous" },
    ];

    return (
        <div>
            <div>
            What is your ideal work schedule?
            </div>
            <select value={answerFourteen} onChange={updateAnswer}>
                <option disabled></option>
                {answersFourteen.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answerFourteen}</div>
      </div>
    );
}
function NextPrevQuestionSelect():React.JSX.Element{
    const questions=[
      {id:1,function:ChangeQuestionOneB()},
      {id:2,function:ChangeQuestionTwoB()},
      {id:3,function:ChangeQuestionThreeB()},
      {id:4,function:ChangeQuestionFourB()},
      {id:5,function:ChangeQuestionFiveB()},
      {id:6,function:ChangeQuestionSixB()},
      {id:7,function:ChangeQuestionSevenB()},
      {id:8,function:ChangeQuestionEightB()},
      {id:9,function:ChangeQuestionNineB()},
      {id:10,function:ChangeQuestionTenB()},
      {id:11,function:ChangeQuestionElevenB()},
      {id:12,function:ChangeQuestionTwelveB()},
      {id:13,function:ChangeQuestionThirteenB()},
      {id:14,function:ChangeQuestionFourteenB()},
    ];
    const [currentIndex,setCurrentIndex]=useState(0);

    const handleNext=()=>{
      if(currentIndex<questions.length-1){
        setCurrentIndex(currentIndex+1);
      }
    }
    const handlePrevious=()=>{
      if(currentIndex>0){
        setCurrentIndex(currentIndex-1);
      }
    }

    return(
      <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div>{questions[currentIndex].function}</div>
      <div style={{ marginTop: "20px" }}>
        <Button style={{color:"#212429",backgroundColor:"white",marginRight:"60%", boxShadow: '0 0 9em white, 0 0 0.9em white'}} 
        onClick={handlePrevious} 
        disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button style={{color:"#212429",backgroundColor:"white", marginLeft:"5%", boxShadow: '0 0 9em white, 0 0 0.9em white'}}
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
    );
    }


function ChatGPTContents(){
    return contents;
}

return (<div>
    <div>{NextPrevQuestionSelect()}</div>
    <pre></pre>
      <ProgressBar
        now={progress}
        label={`${Math.round(progress)}%`}
        className="progressBar"
        striped
        style={{maxWidth: "90%", marginLeft: "5%", marginRight: "5%"}}
      ></ProgressBar>
      <pre></pre>
      {completed && (
        <div className="feedback">
          <h4>Quiz completed!</h4>
        </div>
      )}
      <ChatGPT apiKey = {apiKey} chatGPTcontents={ChatGPTContents()} completed = {completed}/>
    </div>
  );
}
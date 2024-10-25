import { ChangeQuestionOneB, ChangeQuestionTwoB, ChangeQuestionThreeB, ChangeQuestionOneFourB, ChangeQuestionOneFiveB, ChangeQuestionOneSixB, ChangeQuestionOneSevenB} from "../components/BasicQuestionRBOne";
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";


export function BasicQuestions(){
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

    return (<div>
        <h1>Basic Questions</h1>
        <p>
            A simplified version of the quiz containing only multiple choice questions. 
        </p>
        <div><ChangeQuestionThreeB setAnswer={setAnswer3}></ChangeQuestionThreeB></div>
        <pre></pre>
        <div><ChangeQuestionOneB setAnswer={setAnswer1}></ChangeQuestionOneB></div>
        <pre></pre>
        <div><ChangeQuestionTwoB setAnswer={setAnswer2}></ChangeQuestionTwoB></div>
        <pre></pre>
        <div><ChangeQuestionOneFourB setAnswer={setAnswer4}></ChangeQuestionOneFourB></div>
        <pre></pre>
        <div><ChangeQuestionOneFiveB setAnswer={setAnswer5}></ChangeQuestionOneFiveB></div>
        <pre></pre>
        <div><ChangeQuestionOneSixB setAnswer={setAnswer6}></ChangeQuestionOneSixB></div>
        <pre></pre>
        <div><ChangeQuestionOneSevenB setAnswer={setAnswer7}></ChangeQuestionOneSevenB></div>
        <pre></pre>
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="progressBar"></ProgressBar>
        <pre></pre>
        {completed && (
        <div className="feedback">
          <h4>Quiz completed!</h4>
        </div>
      )}
        </div>);
}
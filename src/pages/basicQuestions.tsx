import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { 
    ChangeQuestionOneB, 
    ChangeQuestionTwoB, 
    ChangeQuestionThreeB, 
    ChangeQuestionOneFourB, 
    ChangeQuestionOneFiveB, 
    ChangeQuestionOneSixB, 
    ChangeQuestionOneSevenB 
} from "../components/BasicQuestionRBOne";

export function BasicQuestions() {
    return (
        <div style={{ position: 'relative', width: '80%', margin: '0 auto', textAlign: 'center' }}>
            <h1>Basic Questions</h1>
            <p>A simplified version of the quiz containing only multiple choice questions. There is no time limit.</p>
            
            {/* Container for the questions and lines */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                {/* Left column of questions */}
                <div style={{ width: '45%', textAlign: 'center' }}>
                    <div><ChangeQuestionOneB /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionThreeB /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneFiveB /></div>
                </div>


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
                    <div><ChangeQuestionTwoB /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneFourB /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneSixB /></div>
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
                    <ChangeQuestionOneSevenB />
                </div>
            </div>
        </div>
    );
}

import { ChangeQuestionOneDT, ChangeQuestionTwoDT, ChangeQuestionThreeDT, ChangeQuestionOneFourDT, ChangeQuestionOneFiveDT, ChangeQuestionOneSixDT, ChangeQuestionOneSevenDT} from "../components/DetailedQuestionRBOne";
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

export function DetailedQuestions(){

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
        <h1>Detailed Questions</h1>
    return (<div> 
    <h1>Detailed Questions</h1>
    <p>
        A more detailed version of the quiz containing more specific questions. There is no time limit.
    </p>
        <div><ChangeQuestionOneDT setAnswer={setAnswer1}></ChangeQuestionOneDT></div>
        <pre></pre>
        <div><ChangeQuestionTwoDT setAnswer={setAnswer2}></ChangeQuestionTwoDT></div>
        <pre></pre>
        <div><ChangeQuestionThreeDT setAnswer={setAnswer3}></ChangeQuestionThreeDT></div>
        <pre></pre>
        <div><ChangeQuestionOneFourDT setAnswer={setAnswer4}></ChangeQuestionOneFourDT></div>
        <pre></pre>
        <div><ChangeQuestionOneFiveDT setAnswer={setAnswer5}></ChangeQuestionOneFiveDT></div>
        <pre></pre>
        <div><ChangeQuestionOneSixDT setAnswer={setAnswer6}></ChangeQuestionOneSixDT></div>
        <pre></pre>
        <div><ChangeQuestionOneSevenDT setAnswer={setAnswer7}></ChangeQuestionOneSevenDT></div>
        <pre></pre>
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="progressBar"></ProgressBar>
        <pre></pre>
        {completed && (
        <div className="feedback">
          <h4>Quiz completed!</h4>
        </div>
      )}
        </div>);
    {/* Container for the questions and lines */}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                {/* Left column of questions */}
                <div style={{ width: '45%', textAlign: 'center' }}>
                    <div><ChangeQuestionOneDT setAnswer={setAnswer1}/></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionThreeDT setAnswer={setAnswer3}/></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneFiveDT setAnswer={setAnswer5}/></div>
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
                    <div><ChangeQuestionTwoDT setAnswer={setAnswer2}/></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneFourDT setAnswer={setAnswer4}/></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneSixDT setAnswer={setAnswer6}/></div>
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
                    <ChangeQuestionOneSevenDT setAnswer={setAnswer7}/>
                </div>
            </div>
        </div>
    );
}
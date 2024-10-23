import { ChangeQuestionOneDT, ChangeQuestionTwoDT, ChangeQuestionThreeDT, ChangeQuestionOneFourDT, ChangeQuestionOneFiveDT, ChangeQuestionOneSixDT, ChangeQuestionOneSevenDT} from "../components/DetailedQuestionRBOne";

export function DetailedQuestions(){
    return (<div> 
    <h1>Detailed Questions</h1>
    <p>
        A more detailed version of the quiz containing more specific questions. There is no time limit.
    </p>
    {/* Container for the questions and lines */}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                {/* Left column of questions */}
                <div style={{ width: '45%', textAlign: 'center' }}>
                    <div><ChangeQuestionOneDT /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionThreeDT /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneFiveDT /></div>
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
                    <div><ChangeQuestionTwoDT /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneFourDT /></div>
                    <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                    <div><ChangeQuestionOneSixDT /></div>
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
                    <ChangeQuestionOneSevenDT />
                </div>
            </div>
        </div>
    );
}
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

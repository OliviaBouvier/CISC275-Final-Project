import { ChangeQuestionOneDT, ChangeQuestionTwoDT, ChangeQuestionThreeDT, ChangeQuestionOneFourDT, ChangeQuestionOneFiveDT, ChangeQuestionOneSixDT, ChangeQuestionOneSevenDT} from "../components/DetailedQuestionRBOne";

export function DetailedQuestions(){
    return (<div>
        <h1>Detailed Questions</h1>
    <p>
        A more detailed version of the quiz containing more specific questions. 
    </p>
        <div><ChangeQuestionOneDT></ChangeQuestionOneDT></div>
        <pre></pre>
        <div><ChangeQuestionTwoDT></ChangeQuestionTwoDT></div>
        <pre></pre>
        <div><ChangeQuestionThreeDT></ChangeQuestionThreeDT></div>
        <pre></pre>
        <div><ChangeQuestionOneFourDT></ChangeQuestionOneFourDT></div>
        <pre></pre>
        <div><ChangeQuestionOneFiveDT></ChangeQuestionOneFiveDT></div>
        <pre></pre>
        <div><ChangeQuestionOneSixDT></ChangeQuestionOneSixDT></div>
        <pre></pre>
        <div><ChangeQuestionOneSevenDT></ChangeQuestionOneSevenDT></div>
        </div>);
}
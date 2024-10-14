import { ChangeQuestionOneB, ChangeQuestionTwoB, ChangeQuestionThreeB, ChangeQuestionOneFourB, ChangeQuestionOneFiveB, ChangeQuestionOneSixB, ChangeQuestionOneSevenB} from "../components/BasicQuestionRBOne";


export function BasicQuestions(){
    return (<div>
        <h1>Basic Questions</h1>
        <p>
            A simplified version of the quiz containing only multiple choice questions. 
        </p>
        <div><ChangeQuestionOneB></ChangeQuestionOneB></div>
        <pre></pre>
        <div><ChangeQuestionTwoB></ChangeQuestionTwoB></div>
        <pre></pre>
        <div><ChangeQuestionThreeB></ChangeQuestionThreeB></div>
        <pre></pre>
        <div><ChangeQuestionOneFourB></ChangeQuestionOneFourB></div>
        <pre></pre>
        <div><ChangeQuestionOneFiveB></ChangeQuestionOneFiveB></div>
        <pre></pre>
        <div><ChangeQuestionOneSixB></ChangeQuestionOneSixB></div>
        <pre></pre>
        <div><ChangeQuestionOneSevenB></ChangeQuestionOneSevenB></div>
        </div>);
}
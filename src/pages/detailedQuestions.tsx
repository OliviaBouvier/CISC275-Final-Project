import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { DetailedMultipleChoice } from "../components/DetailedQuestionRBOne";
import "./detailedQuestions.css";

export function DetailedQuestions() {
  let keyData = "";
  const saveKeyData = "MYKEY";
  const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
  if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
  }
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div>
      <div className="background-image">
        <h1 className="page-title">Detailed Questions</h1>
        <p className="page-subtitle">A more detailed version of the quiz containing more specific questions. There is no time limit.</p>
        <pre></pre>
        <div className="question-box-container-detailed">
          <div className="question-box-detailed">
            <DetailedMultipleChoice apiKey={key}/>
          </div>
        </div>
      </div>
      <div className="page-footer">
        <Form>
          <Form.Label style={{color:"white", textShadow: "0 0 1em white, 0 0 0.2em white"}}>API Key:</Form.Label>
          <Form.Control style={{backgroundColor:"black",color:"white"}}
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
          ></Form.Control>
          <br></br>
          <Button className="apikey-submit" onClick={handleSubmit}>
            Submit API key
          </Button>
        </Form>
      </div>
    </div>
  );
}

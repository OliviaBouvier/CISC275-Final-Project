import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import { ChatGPT } from "./chatgpt";

let chatGPTcontents = "";

interface DetailedRadioButtonsProps {
  apiKey: string;
}

export function DetailedRadioButtons({ apiKey }: DetailedRadioButtonsProps) {
  const [contents, setContents] = useState<string>("");

  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");
  const [answer6, setAnswer6] = useState<string>("");
  const [answer7, setAnswer7] = useState<string>("");

  const feedback = [
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
  ].filter(Boolean).length;
  const progress = (feedback / 7) * 100;
  const completed = progress === 100;

  function ChangeQuestionOneDT(): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
      const newAnswer = event.target.value;
      setChangeAnswer(event.target.value);
      setAnswer1(event.target.value);

      if (chatGPTcontents.includes("I would say my work ethic is")) {
        chatGPTcontents = chatGPTcontents.replace(
          /On a scale of 1 to 5, I would say my work ethic is .+?(\. |$)/,
          `On a scale of 1 to 5, I would say my work ethic is ${newAnswer}. `
        );
      } else {
        chatGPTcontents += `On a scale of 1 to 5, I would say my work ethic is ${newAnswer}. `;
      }
      setContents(chatGPTcontents);
    }

    const answers = [
      { id: "Five (Great)" },
      { id: "Four" },
      { id: "Three (Neutral)" },
      { id: "Two " },
      { id: "One (Not great)" },
    ];

    return (
      <div>
        <div>
          One being the least and five being the best, how good is your work
          ethic?
        </div>
        {answers.map((answersList) => (
          <Form.Check
            inline
            key={answersList.id}
            type="radio"
            name="DetailedQuestionOne"
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
  function ChangeQuestionTwoDT(): React.JSX.Element {
    const [answerTwo, setChangeAnswerTwo] = useState<string>("");

    function updateAnswerTwo(event: React.ChangeEvent<HTMLInputElement>) {
      const newAnswer = event.target.value;
      setChangeAnswerTwo(event.target.value);
      setAnswer2(event.target.value);

      if (chatGPTcontents.includes("My friends would say my work ethic is")) {
        chatGPTcontents = chatGPTcontents.replace(
          /On a scale of 1 to 5, my peerss would say my work ethic is .+?(\. |$)/,
          `On a scale of 1 to 5, my peers would say my work ethic is ${newAnswer}. `
        );
      } else {
        chatGPTcontents += `On a scale of 1 to 5, my peers would say my work ethic is ${newAnswer}. `;
      }
      setContents(chatGPTcontents);
    }

    const answersTwo = [
      { id: "Five (Great)" },
      { id: "Four" },
      { id: "Three (Neutral)" },
      { id: "Two " },
      { id: "One (Not great)" },
    ];

    return (
      <div>
        <div>
          One being the least and five being the best, how good would your peers
          say your work ethic is?
        </div>
        {answersTwo.map((answersListTwo) => (
          <Form.Check
            inline
            key={answersListTwo.id}
            type="radio"
            name="DetailedQuestionTwo"
            onChange={updateAnswerTwo}
            id={`answer-check-${answersListTwo.id}`}
            label={answersListTwo.id}
            value={answersListTwo.id}
            checked={answerTwo === answersListTwo.id}
          />
        ))}

        <div>You have picked the answer: {answerTwo}</div>
      </div>
    );
  }
  function ChangeQuestionThreeDT(): React.JSX.Element {
    const [answerThree, setChangeAnswerThree] = useState<string>("");

    function updateAnswerThree(event: React.ChangeEvent<HTMLInputElement>) {
      const newAnswer = event.target.value;
      setChangeAnswerThree(event.target.value);
      setAnswer3(event.target.value);

      if (chatGPTcontents.includes("I am most likely to pursue a career in")) {
        chatGPTcontents = chatGPTcontents.replace(
          /I am most likely to pursue a career in .+?(\. |$)/,
          `I am most likely to pursue a career in ${newAnswer}. `
        );
      } else {
        chatGPTcontents += `I am most likely to pursue a career in ${newAnswer}. `;
      }
      setContents(chatGPTcontents);
    }

    const answersThree = [
      { id: "Technology Field" },
      { id: "Medical Field" },
      { id: "Science Field" },
      { id: "Teaching" },
      { id: "Trades" },
      { id: "Manual Labor" },
    ];

    return (
      <div>
        <div>Choose whichever career field you would most likely pursue</div>
        {answersThree.map((answersListThree) => (
          <Form.Check
            inline
            key={answersListThree.id}
            type="radio"
            name="DetailedQuestionThree"
            onChange={updateAnswerThree}
            id={`answer-check-${answersListThree.id}`}
            label={answersListThree.id}
            value={answersListThree.id}
            checked={answerThree === answersListThree.id}
          />
        ))}

        <div>You have picked the answer: {answerThree}</div>
      </div>
    );
  }
  function ChangeQuestionFourDT(): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("");

    function updateAnswerFour(event: React.ChangeEvent<HTMLInputElement>) {
      const newAnswer = event.target.value;
      setChangeAnswerFour(event.target.value);
      setAnswer4(event.target.value);

      if (chatGPTcontents.includes("I work best")) {
        chatGPTcontents = chatGPTcontents.replace(
          /I work best .+?(\. |$)/,
          `I work best ${newAnswer}. `
        );
      } else {
        chatGPTcontents += `I work best ${newAnswer}. `;
      }
      setContents(chatGPTcontents);
    }

    const answersFour = [{ id: "On my own" }, { id: "In a group" }];

    return (
      <div>
        <div>
          If you had a choice of working on your own or as a group which would
          your choose?
        </div>
        {answersFour.map((answersListFour) => (
          <Form.Check
            inline
            key={answersListFour.id}
            type="radio"
            name="DetailedQuestionFour"
            onChange={updateAnswerFour}
            id={`answer-check-${answersListFour.id}`}
            label={answersListFour.id}
            value={answersListFour.id}
            checked={answerFour === answersListFour.id}
          />
        ))}

        <div>You have picked the answer: {answerFour}</div>
      </div>
    );
  }
  function ChangeQuestionFiveDT(): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("");

    function updateAnswerFive(event: React.ChangeEvent<HTMLInputElement>) {
      const newAnswer = event.target.value;
      setChangeAnswerFive(event.target.value);
      setAnswer5(event.target.value);

      if (
        chatGPTcontents.includes(
          "The following describes the work environment which would best suit me:"
        )
      ) {
        chatGPTcontents = chatGPTcontents.replace(
          /The following describes the work environment which would best suit me: .+?(\. |$)/,
          `The following describes the work environment which would best suit me: ${newAnswer}. `
        );
      } else {
        chatGPTcontents += `The following describes the work environment which would best suit me: ${newAnswer}. `;
      }
      setContents(chatGPTcontents);
    }

    const answersFive = [
      { id: "High stress, always something going on" },
      { id: "Laid back, little to no stress" },
      { id: "Bouncing between high and low stress" },
      { id: "Right in the middle of high and low stress" },
    ];

    return (
      <div>
        <div>What kind of work environment would best suit you?</div>
        {answersFive.map((answersListFive) => (
          <Form.Check
            inline
            key={answersListFive.id}
            type="radio"
            name="DetailedQuestionFive"
            onChange={updateAnswerFive}
            id={`answer-check-${answersListFive.id}`}
            label={answersListFive.id}
            value={answersListFive.id}
            checked={answerFive === answersListFive.id}
          />
        ))}

        <div>You have picked the answer: {answerFive}</div>
      </div>
    );
  }
  function ChangeQuestionSixDT(): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("");

    function updateAnswerSix(event: React.ChangeEvent<HTMLInputElement>) {
      const newAnswer = event.target.value;
      setChangeAnswerSix(event.target.value);
      setAnswer6(event.target.value);

      if (chatGPTcontents.includes("My attitude towards others is:")) {
        chatGPTcontents = chatGPTcontents.replace(
          /My attitude towards others is: .+?(\. |$)/,
          `My attitude towards others is: ${newAnswer}. `
        );
      } else {
        chatGPTcontents += `My attitude towards others is: ${newAnswer}. `;
      }
      setContents(chatGPTcontents);
    }

    const answersSix = [
      { id: "Very outgoing, love to be around others" },
      {
        id: "Don't mind being around people or alone but prefer to be around people",
      },
      { id: "Don't mind being around people or alone but prefer to be alone" },
      { id: "Don't like being around other people at all" },
    ];

    return (
      <div>
        <div>How would you describe your personality?</div>
        {answersSix.map((answersListSix) => (
          <Form.Check
            inline
            key={answersListSix.id}
            type="radio"
            name="DetailedQuestionSix"
            onChange={updateAnswerSix}
            id={`answer-check-${answersListSix.id}`}
            label={answersListSix.id}
            value={answersListSix.id}
            checked={answerSix === answersListSix.id}
          />
        ))}

        <div>You have picked the answer: {answerSix}</div>
      </div>
    );
  }
  function ChangeQuestionSevenDT(): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerSeven(event.target.value);
        setAnswer7(event.target.value);

        if (
          chatGPTcontents.includes(
            "Out of doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose"
          )
        ) {
          chatGPTcontents = chatGPTcontents.replace(
            /Out of doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose .+?(\. |$)/,
            `Out of doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `Out of doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }

      const answersSeven = [
        { id: "Docture/nurse" },
        { id: "Plumber" },
        { id: "Construction" },
        { id: "Teacher" },
        { id: "IT" },
        { id: "Chemical scientist" },
        { id: "archaeologist" },
      ];

      return (
        <div>
          <div>
            Out of all the jobs listed, which would you want to be the most?
          </div>
          {answersSeven.map((answersListSeven) => (
            <Form.Check
              inline
              key={answersListSeven.id}
              type="radio"
              name="DetailedQuestionSeven"
              onChange={updateAnswerSeven}
              id={`answer-check-${answersListSeven.id}`}
              label={answersListSeven.id}
              value={answersListSeven.id}
              checked={answerSeven === answersListSeven.id}
            />
          ))}

          <div>You have picked the answer: {answerSeven}</div>
        </div>
      );
    }

    function ChatGPTContents(){
        return contents;
    }

    return (<div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}>
        
          {/* Left column of questions */}
          <div style={{ width: "45%", textAlign: "center" }}>
            <div>{ChangeQuestionOneDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div>{ChangeQuestionThreeDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div>{ChangeQuestionFiveDT()}</div>
            </div>

          {/* Vertical Line */}
          <div style={{ width: "10px", display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: "115%",
                borderLeft: "3px solid grey",
                marginLeft: "5px",
              }}
            ></div>
          </div>

          {/* Right column of questions */}
          <div style={{ width: "45%", textAlign: "center" }}>
            <div>{ChangeQuestionTwoDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div>{ChangeQuestionFourDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div>{ChangeQuestionSixDT()}</div>
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            padding: "20px",
            textAlign: "center",
          }}
        >
          {/* Box with thicker bottom line */}
          <div
            style={{
              border: "3px solid grey",
              padding: "20px",
              display: "inline-block",
              width: "60%",
            }}
          >
            {ChangeQuestionSevenDT()}
          </div>
        </div>
        <ProgressBar
          now={progress}
          label={`${Math.round(progress)}%`}
          className="progressBar"
        ></ProgressBar>
        <pre></pre>
        {completed && (
          <div className="feedback">
            <h4>Quiz completed!</h4>
          </div>
        )}
        <ChatGPT apiKey = {apiKey} chatGPTcontents={ChatGPTContents()}/>
      </div>
    );
  }


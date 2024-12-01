import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { ChatGPT } from "./chatgpt";
import confetti from "canvas-confetti";

let chatGPTcontents = "";

interface DetailedMultipleChoiceProps {
  apiKey: string;
}

export function DetailedMultipleChoice({ apiKey }: DetailedMultipleChoiceProps) {
  const [contents, setContents] = useState<string>("");

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

  const feedback = [
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10,
    answer11,
    answer12,
    answer13,
    answer14
  ].filter(Boolean).length;
  const progress = (feedback / 14) * 100;
  const completed = progress === 100;

  const launch=()=>{confetti({particleCount:750,spread:150,origin:{y:0.6}})}
    useEffect(()=>{
        if(completed){
            launch();
        }
    }, [completed]);

  function ChangeQuestionOneDT(): React.JSX.Element {
    const [answer, setChangeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
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
  function ChangeQuestionTwoDT(): React.JSX.Element {
    const [answerTwo, setChangeAnswerTwo] = useState<string>("");

    function updateAnswerTwo(event: React.ChangeEvent<HTMLSelectElement>) {
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
        <select value={answerTwo} onChange={updateAnswerTwo}>
                <option disabled></option>
                {answersTwo.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
        </select>
        <div>You have picked the answer: {answerTwo}</div>
      </div>
    );
  }
  function ChangeQuestionThreeDT(): React.JSX.Element {
    const [answerThree, setChangeAnswerThree] = useState<string>("");

    function updateAnswerThree(event: React.ChangeEvent<HTMLSelectElement>) {
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
        <select value={answerThree} onChange={updateAnswerThree}>
                <option disabled></option>
                {answersThree.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
          </select>

        <div>You have picked the answer: {answerThree}</div>
      </div>
    );
  }
  function ChangeQuestionFourDT(): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("");

    function updateAnswerFour(event: React.ChangeEvent<HTMLSelectElement>) {
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
        <select value={answerFour} onChange={updateAnswerFour}>
                <option disabled></option>
                {answersFour.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
            </select>
        <div>You have picked the answer: {answerFour}</div>
      </div>
    );
  }
  function ChangeQuestionFiveDT(): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("");

    function updateAnswerFive(event: React.ChangeEvent<HTMLSelectElement>) {
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
        <select value={answerFive} onChange={updateAnswerFive}>
                <option disabled></option>
                {answersFive.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
          </select>
        <div>You have picked the answer: {answerFive}</div>
      </div>
    );
  }
  function ChangeQuestionSixDT(): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("");

    function updateAnswerSix(event: React.ChangeEvent<HTMLSelectElement>) {
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
        <select value={answerSix} onChange={updateAnswerSix}>
                <option disabled></option>
                {answersSix.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
          </select>
        <div>You have picked the answer: {answerSix}</div>
      </div>
    );
  }
  function ChangeQuestionSevenDT(): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLSelectElement>) {
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
        { id: "Archaeologist" },
      ];

      return (
        <div>
          <div>
            Out of all the jobs listed, which would you want to be the most?
          </div>
          <select value={answerSeven} onChange={updateAnswerSeven}>
                <option disabled></option>
                {answersSeven.map((answerOption)=>(
                    <option key={answerOption.id} value={answerOption.id}>
                    {answerOption.id}
                </option>
            ))}
          </select>
          <div>You have picked the answer: {answerSeven}</div>
        </div>
      );
    }
    function ChangeQuestionEightDT(): React.JSX.Element {
      const [answerEight, setChangeAnswerEight] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerEight(event.target.value);
        setAnswer8(event.target.value);
  
        if (chatGPTcontents.includes("What is your optimal yearly salary?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /What is your optimal yearly salary? .+?(\. |$)/,
            `What is your optimal yearly salary? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `What is your optimal yearly salary? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersEight = [
        { id: "120k+" },
        { id: "100-120k" },
        { id: "80-100k" },
        { id: "60-80k" },
        { id: "40-60k" },
        { id: "Below 40k" }
      ];
  
      return (
        <div>
          <div>
          What is your optimal yearly salary?
          </div>
          <select value={answerEight} onChange={updateAnswer}>
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
    function ChangeQuestionNineDT(): React.JSX.Element {
      const [answerNine, setChangeAnswerNine] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerNine(event.target.value);
        setAnswer9(event.target.value);
  
        if (chatGPTcontents.includes("Do you want to make a positive impact at your job?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /Do you want to make a positive impact at your job? .+?(\. |$)/,
            `Do you want to make a positive impact at your job? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `Do you want to make a positive impact at your job? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersNine = [
        { id: "Yes, I want to make change" },
        { id: "Yes, but its not necessary" },
        { id: "No, but I can if I need to" },
        { id: "No, I prefer to work alone" },
        { id: "No" }
      ];
  
      return (
        <div>
          <div>
          Do you want to make a positive impact at your job?
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
    function ChangeQuestionTenDT(): React.JSX.Element {
      const [answerTen, setChangeAnswerTen] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerTen(event.target.value);
        setAnswer10(event.target.value);
  
        if (chatGPTcontents.includes("Do you like working more with people, computers, or numbers more?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /Do you like working more with people, computers, or numbers more? .+?(\. |$)/,
            `Do you like working more with people, computers, or numbers more? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `Do you like working more with people, computers, or numbers more? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersTen = [
        { id: "People" },
        { id: "Computers" },
        { id: "Numbers" }
      ];
  
      return (
        <div>
          <div>
          Do you like working more with people, computers, or numbers more?
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
    function ChangeQuestionElevenDT(): React.JSX.Element {
      const [answerEleven, setChangeAnswerEleven] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerEleven(event.target.value);
        setAnswer11(event.target.value);
  
        if (chatGPTcontents.includes("On a scale of one to five do you enjoy teaching others?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /On a scale of one to five do you enjoy teaching others? .+?(\. |$)/,
            `On a scale of one to five do you enjoy teaching others? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `On a scale of one to five, do you enjoy teaching others? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersEleven = [
        { id: "Five (Most)" },
        { id: "Four" },
        { id: "Three (Neutral)" },
        { id: "Two " },
        { id: "One (Least)" },
      ];
  
      return (
        <div>
          <div>
          On a scale of one to five do you enjoy teaching others?
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
    function ChangeQuestionTwelveDT(): React.JSX.Element {
      const [answerTwelve, setChangeAnswerTwelve] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerTwelve(event.target.value);
        setAnswer12(event.target.value);
  
        if (chatGPTcontents.includes("On a scale of one to five, how would you do as a leader?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /On a scale of one to five how would you do as a leader? .+?(\. |$)/,
            `On a scale of one to five how would you do as a leader? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `On a scale of one to five how would you do as a leader? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersTwelve = [
        { id: "Five (Great)" },
        { id: "Four" },
        { id: "Three (Neutral)" },
        { id: "Two " },
        { id: "One (Not great)" },
      ];
  
      return (
        <div>
          <div>
          On a scale of one to five how would you do as a leader?
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
    function ChangeQuestionThirteenDT(): React.JSX.Element {
      const [answerThirteen, setChangeAnswerThirteen] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerThirteen(event.target.value);
        setAnswer13(event.target.value);
  
        if (chatGPTcontents.includes("On a scale of one to five, how much do you like taking risks?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /On a scale of one to five, how much do you like taking risks? .+?(\. |$)/,
            `On a scale of one to five, how much do you like taking risks? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `On a scale of one to five, how much do you like taking risks? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersThirteen = [
        { id: "Five (Most)" },
        { id: "Four" },
        { id: "Three (Neutral)" },
        { id: "Two " },
        { id: "One (Least)" },
      ];
  
      return (
        <div>
          <div>
          On a scale of one to five, how much do you like taking risks?
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
    function ChangeQuestionFourteenDT(): React.JSX.Element {
      const [answerFourteen, setChangeAnswerFourteen] = useState<string>("");
  
      function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerFourteen(event.target.value);
        setAnswer14(event.target.value);
  
        if (chatGPTcontents.includes("On a scale of one to five, how important is work-life balance?")) {
          chatGPTcontents = chatGPTcontents.replace(
            /On a scale of one to five, how important is work-life balance? .+?(\. |$)/,
            `On a scale of one to five, how important is work-life balance? ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `On a scale of one to five, how important is work-life balance? ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
      }
  
      const answersFourteen = [
        { id: "Five (Most)" },
        { id: "Four" },
        { id: "Three (Neutral)" },
        { id: "Two " },
        { id: "One (Least)" },
      ];
  
      return (
        <div>
          <div>
          On a scale of one to five, how important is work-life balance?
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
            <div style={{color:"white"}}>{ChangeQuestionOneDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionThreeDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionFiveDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionSevenDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionNineDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionElevenDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionThirteenDT()}</div>
          </div>

          {/* Vertical Line */}
          <div style={{ width: "10px", display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: "105%",
                borderLeft: "3px solid grey",
                marginLeft: "5px",
              }}
            ></div>
          </div>

          {/* Right column of questions */}
          <div style={{ width: "45%", textAlign: "center" }}>
            <div style={{color:"white"}}>{ChangeQuestionTwoDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionFourDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionSixDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionEightDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionTenDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionTwelveDT()}</div>
            <hr style={{ borderTop: "3px solid black", margin: "20px 0" }} />
            <div style={{color:"white"}}>{ChangeQuestionFourteenDT()}</div>
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            padding: "20px",
            textAlign: "center",
          }}
        >
        </div>
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
            <h4 style={{color:"white"}}>Quiz completed!</h4>
          </div>
        )}
        <ChatGPT apiKey = {apiKey} chatGPTcontents={ChatGPTContents()} completed = {completed}/>
      </div>
    );
  }
  
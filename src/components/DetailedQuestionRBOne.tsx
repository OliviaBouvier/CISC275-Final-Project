import React, { useEffect, useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";
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

    function updateAnswerThree(event: React.ChangeEvent<HTMLTextAreaElement>) {
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

    return (
      <div>
          <div>
            In a couple sentences, state which job field you are most likely to pursue and why?
          </div>
          <textarea
            value={answerThree}
            onChange={updateAnswerThree}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
    );
  }
  function ChangeQuestionFourDT(): React.JSX.Element {
    const [answerFour, setChangeAnswerFour] = useState<string>("");

    function updateAnswerFour(event: React.ChangeEvent<HTMLTextAreaElement>) {
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
    return (
      <div>
          <div>
            In a couple sentences, if you had the choice to work on your own or in a group. Which would you choose and why?
          </div>
          <textarea
            value={answerFour}
            onChange={updateAnswerFour}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
    );
  }
  function ChangeQuestionFiveDT(): React.JSX.Element {
    const [answerFive, setChangeAnswerFive] = useState<string>("");

    function updateAnswerFive(event: React.ChangeEvent<HTMLTextAreaElement>) {
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

    return (
      <div>
          <div>
            In a couple sentences, what is your optimal work environment and why?
          </div>
          <textarea
            value={answerFive}
            onChange={updateAnswerFive}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
    );
  }
  function ChangeQuestionSixDT(): React.JSX.Element {
    const [answerSix, setChangeAnswerSix] = useState<string>("");

    function updateAnswerSix(event: React.ChangeEvent<HTMLTextAreaElement>) {
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

    return (
      <div>
          <div>
            In a couple sentences, how would you describe your own personality?
          </div>
          <textarea
            value={answerSix}
            onChange={updateAnswerSix}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
    );
  }
  function ChangeQuestionSevenDT(): React.JSX.Element {
    const [answerSeven, setChangeAnswerSeven] = useState<string>("");

    function updateAnswerSeven(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newAnswer = event.target.value;
        setChangeAnswerSeven(newAnswer);
        setAnswer7(newAnswer);

        if (
          chatGPTcontents.includes(
            "Out of a doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose"
          )
        ) {
          chatGPTcontents = chatGPTcontents.replace(
            /Out of a doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose .+?(\. |$)/,
            `Out of a doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose ${newAnswer}. `
          );
        } else {
          chatGPTcontents += `Out of a doctor, plumber, construction worker, teacher, IT specialist, chemist, and archaeologist, I would choose ${newAnswer}. `;
        }
        setContents(chatGPTcontents);
    }

      return (
        <div>
          <div>
            In a couple sentences, out of all the jobs in the world, which would you want to be the most and why?
          </div>
          <textarea
            value={answerSeven}
            onChange={updateAnswerSeven}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
      );
    }
    function ChangeQuestionEightDT(): React.JSX.Element {
      const [answerEight, setChangeAnswerEight] = useState<string>("");
  
      function updateAnswerEight(event: React.ChangeEvent<HTMLTextAreaElement>) {
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
  
      return (
        <div>
          <div>
            What is your optimal yearly salary and why?
          </div>
          <textarea
            value={answerEight}
            onChange={updateAnswerEight}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
      );
    }
    function ChangeQuestionNineDT(): React.JSX.Element {
      const [answerNine, setChangeAnswerNine] = useState<string>("");
  
      function updateAnswerNine(event: React.ChangeEvent<HTMLTextAreaElement>) {
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
  
      return (
        <div>
          <div>
            In a couple sentences, would you like to make a positive impact at your workplace?
          </div>
          <textarea
            value={answerNine}
            onChange={updateAnswerNine}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
        </div>
      );
    }
    function ChangeQuestionTenDT(): React.JSX.Element {
      const [answerTen, setChangeAnswerTen] = useState<string>("");
  
      function updateAnswerTen(event: React.ChangeEvent<HTMLTextAreaElement>) {
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
  
      return (
        <div>
          <div>
            In a couple sentences, would you rather work with people, numbers, or computers more and why?
          </div>
          <textarea
            value={answerTen}
            onChange={updateAnswerTen}
            placeholder="Type Answer here"
            style={{width:"600px",height: "75px" }}
          />
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
    
    function NextPrevQuestionSelect():React.JSX.Element{
    const questions=[
      {id:1,function:ChangeQuestionOneDT()},
      {id:2,function:ChangeQuestionTwoDT()},
      {id:3,function:ChangeQuestionElevenDT()},
      {id:4,function:ChangeQuestionTwelveDT()},
      {id:5,function:ChangeQuestionThirteenDT()},
      {id:6,function:ChangeQuestionFourteenDT()},
      {id:7,function:ChangeQuestionSevenDT()},
      {id:8,function:ChangeQuestionEightDT()},
      {id:9,function:ChangeQuestionNineDT()},
      {id:10,function:ChangeQuestionTenDT()},
      {id:11,function:ChangeQuestionThreeDT()},
      {id:12,function:ChangeQuestionFourDT()},
      {id:13,function:ChangeQuestionFiveDT()},
      {id:14,function:ChangeQuestionSixDT()},
    ];
    const [currentIndex,setCurrentIndex]=useState(0);

    const handleNext=()=>{
      if(currentIndex<questions.length-1){
        setCurrentIndex(currentIndex+1);
      }
    }
    const handlePrevious=()=>{
      if(currentIndex>0){
        setCurrentIndex(currentIndex-1);
      }
    }

    return(
      <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div>{questions[currentIndex].function}</div>
      <div style={{ marginTop: "20px" }}>
        <Button style={{color:"#212429",backgroundColor:"white",marginRight:"60%", 
        boxShadow: '0 0 9em white, 0 0 0.9em white', borderColor:'white'}} 
        onClick={handlePrevious} 
        disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button style={{color:"#212429",backgroundColor:"white", marginLeft:"5%", 
        boxShadow: '0 0 9em white, 0 0 0.9em white', borderColor:'white'}}
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
    );
    }
  

    function ChatGPTContents(){
        return contents;
    }

    return (<div>
      <div style={{fontWeight:'bold', color:'white'}}>{NextPrevQuestionSelect()}</div>
      <pre></pre>
        <ProgressBar
          now={progress}
          label={`${Math.round(progress)}%`}
          className="progressBar"
          style={{maxWidth: "90%", marginLeft: "5%", marginRight: "5%", background:'black'}}
        >
          <ProgressBar
            now={progress}
            style={{
              backgroundColor:'white'
            }}
          />
        </ProgressBar>
        <pre></pre>
        {completed && (
          <div className="feedback">
            <h4 style={{color:'white'}}>Quiz completed!</h4>
          </div>
        )}
        <pre/>
        <ChatGPT apiKey = {apiKey} chatGPTcontents={ChatGPTContents()} completed = {completed}/>
      </div>
    );
  }
  
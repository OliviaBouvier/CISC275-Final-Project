import React, { useState } from "react";
import { Button, Spinner, Alert } from "react-bootstrap";
import OpenAI from "openai";
import Modal from "react-bootstrap/Modal";
import "./chatgpt.css";

interface ChatGPTProps {
  apiKey: string;
  chatGPTcontents: string;
  completed: boolean;
}

export function ChatGPT({
  apiKey,
  chatGPTcontents,
  completed,
}: ChatGPTProps): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [suitedToCareer, setSuitedToCareer] = useState<string>("");
  const [similarCareers, setSimilarCareers] = useState<string>("");
  const [responseComplete, setResponseComplete] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  async function handleChatGPTSubmission() {
    setLoading(true);
    setError(null);

    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

    try {
      const completionTitle = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          {
            role: "user",
            content: `Give me the title of the career that you think I should pursue based on the following: ${chatGPTcontents} Give me only the title; do not say anything else.`,
          },
        ],
      });

      // Extract the response and set it in state
      if (
        completionTitle.choices[0].message.content != null &&
        completionTitle.choices[0].message.content !== ""
      ) {
        setTitle(completionTitle.choices[0].message.content);
        console.log(completionTitle.choices[0].message.content);
      } else {
        setError("No title generated");
        console.log("The title wasn't generated");
        throw error;
      }

      const completionDescription = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          {
            role: "user",
            content: `Briefly describe this career: ${completionTitle.choices[0].message.content}. If there is no career title following the colon, let me know.`,
          },
        ],
      });

      if (completionDescription.choices[0].message.content != null) {
        setDescription(completionDescription.choices[0].message.content);
      } else {
        setError("No description generated");
        throw error;
      }

      const completionSuitedToCareer = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          {
            role: "user",
            content: `Based on the following, briefly describe why I would be suited to being a ${completionTitle.choices[0].message.content}: ${chatGPTcontents}`,
          },
        ],
      });

      if (completionSuitedToCareer.choices[0].message.content != null) {
        setSuitedToCareer(completionSuitedToCareer.choices[0].message.content);
      } else {
        setError("No content received from the API.");
        throw error;
      }

      const completionSimilarCareers = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          {
            role: "user",
            content: `Give a brief list of three careers that are similar to ${completionTitle.choices[0].message.content}: ${chatGPTcontents}
            in the following format, with each career on its own line:1. career title 2. career title 3. career title`,
          },
        ],
      });

      if (completionSimilarCareers.choices[0].message.content != null) {
        setSimilarCareers(completionSimilarCareers.choices[0].message.content);
        toggleModal();
        setResponseComplete(true);
      } else {
        setError(
          "No content received from the API while generating similar careers."
        );
        throw error;
      }
    } catch (error) {
      console.error(
        "Error fetching completion:",
        JSON.stringify(error, null, 2)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button
        style={{ backgroundColor: "white", color: "black", marginBottom: ".5%" }}
        onClick={() => {
          handleChatGPTSubmission();
        }}
        disabled={apiKey === "" || !completed}
      >
        {loading ? (
          <div>
            <Spinner as="span" animation="border" size="sm" />
            <div>Please wait while we process your results.</div>
          </div>
        ) : (
          "Submit to ChatGPT"
        )}
      </Button>
      {!apiKey && (
        <Alert
          style={{ backgroundColor: "black", color: "white", border: "black" }}
          variant="warning"
          className="mt-3"
        >
          Please enter an API key before submitting.
        </Alert>
      )}

      {error && (
        <Alert
          style={{ backgroundColor: "black", color: "white", border: "black" }}
          variant="danger"
          className="mt-3"
        >
          {error}
        </Alert>
      )}

      {responseComplete && !error && (
        <Alert variant="success" className="mt-3">
          Response successfully recorded!
        </Alert>
      )}

      {showModal && (
        <Modal show={showModal} onHide={toggleModal} dialogClasSName="custom-modal" centered>
          <Modal.Header closeButton>
            <Modal.Title>Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>{title}</strong>
            <p>{description}</p>
            <strong>Why We Think This Career Suits You</strong>
            <p>{suitedToCareer}</p>
            <strong>Similar Careers</strong>
            <pre><p>
              {similarCareers}
            </p></pre>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
    
  );
}

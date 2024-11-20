import React, { useState } from "react";
import { Button, Spinner, Alert } from "react-bootstrap";
import OpenAI from "openai";
import Modal from 'react-bootstrap/Modal';

interface ChatGPTProps {
  apiKey: string;
  chatGPTcontents: string;
}

export function ChatGPT({
  apiKey,
  chatGPTcontents,
}: ChatGPTProps): React.JSX.Element {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  async function handleChatGPTSubmission() {
    setLoading(true);
    setError(null);
 
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          {
            role: "user",
            content: `Create a report describing a potential career for me with format: 
                        "career name
                        career description
                        why the user is suited to this career
                        similar careers"
                        based on the following: ${chatGPTcontents}`,
          },
        ],
      });

      // Extract the response and set it in state
      if (completion.choices[0].message.content != null) {
        setResponse(completion.choices[0].message.content);
        setShowModal(true);
      } else {
        setError("No content received from the API.");
      }
    } catch (error) {
      setError(
        "Failed to fetch data from OpenAI API. Please make sure your API key was entered correctly and try again."
      );
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
      <Button style={{backgroundColor:"white", color:"black"}}
        onClick={() => {
          setResponse("");
          handleChatGPTSubmission();
        }}
        disabled={apiKey === ""}
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
        <Alert style={{backgroundColor:"black", color:"white", border:"black"}} variant="warning" className="mt-3">
          Please enter an API key before submitting.
        </Alert>
      )}

      {error && (
        <Alert style={{backgroundColor:"black", color:"white", border:"black"}} variant="danger" className="mt-3">
          {error}
        </Alert>
      )}

      {response && !error && (
        <Alert variant="success" className="mt-3">
          Response successfully recorded!
        </Alert>
      )}

{showModal && (<div
      className="modal show"
      style={{ display: 'block'}}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={toggleModal}>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p><pre>{response}</pre></p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>)}

    </div>
  );
}

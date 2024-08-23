import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef<HTMLFormElement>();

  const sendEmail = (e: HTMLFormElement) => {
    e.preventDefault();
    emailjs
      .sendForm("service_rj9lbxe", "template_5tdcrwf", form.current, {
        publicKey: "tkNcmbiASi0TUZpR7",
      })
      .then(
        () => {
          setMessageSent(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Card
      style={{
        width: "500px",
        height: "480px",
        backgroundColor: "black",
        border: "solid 3px white",
        borderRadius: "10px",
      }}
      className="mx-auto px-4"
    >
      {messageSent ? (
        <div
          variant="success"
          style={{
            width: "500px",
            height: "480px",
          }}
        >
          <p style={{ fontSize: "30px", marginTop: '190px' }}>Message Sent!</p>
        </div>
      ) : (
        <Form
          onSubmit={sendEmail}
          ref={form}
          style={{ maxWidth: "450px", margin: "50px auto" }}
        >
          <Form.Group
            className="mb-3"
            style={{ marginBottom: "10px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
            <Form.Control type="text" name="name" className="input" />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ marginBottom: "10px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label style={{ fontWeight: "bold", marginBottom: "7px" }}>
              Email
            </Form.Label>
            <Form.Control type="email" name="email" className="input" />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ marginBottom: "10px" }}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label style={{ fontWeight: "bold", marginBottom: "7px" }}>
              Message
            </Form.Label>
            <Form.Control
              type="text"
              name="message"
              as="textarea"
              rows={8}
              className="message-input"
            />
          </Form.Group>

          <Button type="submit" className="fw-bold form-button">
            Send
          </Button>
        </Form>
      )}
    </Card>
  );
};

"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rj9lbxe",
        "template_5tdcrwf",
        `name: ${name}, email: ${email}, message: ${message}`,
        {
          publicKey: "tkNcmbiASi0TUZpR7",
        }
      )
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
    <Card className=" flex justify-center align-center mx-auto border border-white p-4 rounded p-20 mt-20 w-2/5">
      {messageSent ? (
        <div>
          <p>Message Sent!</p>
        </div>
      ) : (
        <Form onSubmit={sendEmail} className="">
          <Form.Group className="mb-3 flex flex-col" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              className=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              className=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 flex flex-col" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              name="message"
              as="textarea"
              rows={8}
              className=""
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="fw-bold form-button">
            Send
          </Button>
        </Form>
      )}
    </Card>
  );
}

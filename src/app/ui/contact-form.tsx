"use client";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setMessageSent(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Card className=" flex justify-center align-center mx-auto border border-white py-10 rounded mt-20 w-2/5">
      {!messageSent && !error ? (
        <Form onSubmit={sendEmail} className="w-3/4">
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="mb-1 flex justify-center">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              className="rounded text-black focus:outline-none p-1"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="mb-1 flex justify-center">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="rounded text-black focus:outline-none p-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 flex flex-col justify-center"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="mb-1 flex justify-center">
              Message
            </Form.Label>
            <Form.Control
              type="text"
              name="message"
              as="textarea"
              rows={12}
              className="rounded text-black focus:outline-none p-1"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="fw-bold form-button">
            Send
          </Button>
        </Form>
      ) : (
        <div>
          {!error ? (
            <p>Message Sent!</p>
          ) : (
            <p>
              There was an issue sending this message. If this persits you can
              also send an email directly to danieldentondev@gmail.com{" "}
            </p>
          )}
        </div>
      )}
    </Card>
  );
}

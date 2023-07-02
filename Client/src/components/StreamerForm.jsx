import React, { useState } from "react";
import { postStreamer } from "../axios/axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const StreamerForm = () => {
  const [name, setName] = useState("");
  const [streamingPlatform, setStreamingPlatform] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStreamer = {
      name,
      streamingPlatform,
      description,
    };
    await postStreamer(newStreamer);
    setName("");
    setStreamingPlatform("");
    setDescription("");
  };

  return (
    <>
      <h1>Stramer Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            maxLength={75}
            required
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={streamingPlatform}
          onChange={(e) => setStreamingPlatform(e.target.value)}
          required
        >
          <option value="" disabled>
            Streamin Platform
          </option>
          <option value="Twitch">Twitch</option>
          <option value="YouTube">YouTube</option>
          <option value="TikTok">TikTok</option>
          <option value="Kick">Kick</option>
          <option value="Rumble">Rumble</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" size="lg">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default StreamerForm;

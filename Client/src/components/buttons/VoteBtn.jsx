import React, { useState } from "react";
import { updateStreamerVote } from "../../axios/axios";
import { socket } from "../../socket";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const VoteBtn = ({ streamerId }) => {
  const [voteStatus, setVoteStatus] = useState(null);

  const handleVote = (voteType) => {
    setVoteStatus(voteType);
    updateStreamerVote(streamerId, voteType);
    if (voteType === "upvote") {
      socket.emit(`upvoteStreamer`, streamerId);
    } else if (voteType === "downvote") {
      socket.emit(`downvoteStreamer`, streamerId);
    }
  };

  return (
    <Container>
      <Row xs="auto">
        <Col>
          <Button
            variant={voteStatus === "upvote" ? "success" : "outline-success"}
            onClick={() => handleVote("upvote")}
            disabled={voteStatus === "upvote"}
          >
            Upvote
          </Button>
        </Col>
        <Col>
          <Button
            variant={voteStatus === "downvote" ? "danger" : "outline-danger"}
            onClick={() => handleVote("downvote")}
            disabled={voteStatus === "downvote"}
          >
            Downvote
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default VoteBtn;

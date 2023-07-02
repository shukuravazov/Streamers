import React from "react";
import VoteBtn from "./buttons/VoteBtn";
import VoteCount from "./vote-count/VoteCount";
import { Link } from "react-router-dom";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

export const Streamer = ({ streamer }) => {
  return (
    <>
      <ListGroup.Item as="li" key={streamer._id}>
        <Row>
          <Col>
            <Link to={`/${streamer._id}`}>
              <Image
                src={streamer.profilePicture}
                style={{ width: "50px", height: "50px" }}
                roundedCircle
              />
            </Link>
          </Col>
          <Col>
            <span>Name: {streamer.name}</span>
          </Col>
          <Col>
            <VoteCount streamerVotes={streamer.votes} />
          </Col>
          <Col>
            <VoteBtn streamerId={streamer._id} />
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

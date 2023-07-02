import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStreamerById } from "../axios/axios";
import GoBack from "../components/buttons/GoBack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Stack } from "react-bootstrap";
import VoteCount from "../components/vote-count/VoteCount";

const StreamerRecord = () => {
  const [streamer, setStreamer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getStreamer();
  }, []);

  const getStreamer = async () => {
    const streamerData = await getStreamerById(id);
    setStreamer(streamerData);
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Image
            src={streamer.profilePicture}
            style={{ width: "200px", height: "200px" }}
            roundedCircle
          />
        </Col>
        <Col>
          <Stack gap={3}>
            <div className="p-2">
              <h3>Name:</h3>
              <p>{streamer.name}</p>
            </div>
            <div className="p-2">
              <h5>About:</h5>
              <p>{streamer.description}</p>
            </div>
            <div className="p-2">
              <h5>Streaming Platform:</h5>
              <p>{streamer.streamingPlatform}</p>
            </div>
            <div className="p-2">
              <h5>Votes:</h5>
              <VoteCount streamerVotes={streamer.votes} />
            </div>
          </Stack>
          <GoBack />
        </Col>
      </Row>
    </Container>
  );
};

export default StreamerRecord;

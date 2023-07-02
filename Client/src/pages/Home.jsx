import React from "react";
import StreamerForm from "../components/StreamerForm";
import StreamersList from "../components/StreamersList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <StreamersList />
        </Col>
        <Col sm={4}>
          <StreamerForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

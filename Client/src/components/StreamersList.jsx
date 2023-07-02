import React, { useEffect, useState } from "react";
import { Streamer } from "./Streamer";
import { getStreamers } from "../axios/axios";
import { socket } from "../socket";
import { ListGroup } from "react-bootstrap";

const StreamersList = () => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    getAllStreamers();

    socket.on("getAddedStreamer", (newAddedStreamer) => {
      setStreamers((prevStreamers) => [...prevStreamers, newAddedStreamer]);
    });
    socket.on("upvotedStreamer", (upvotedStreamer) => {
      setStreamers((prevStreamers) => {
        const upvotedStreamers = prevStreamers.map((streamer) => {
          if (streamer._id === upvotedStreamer._id) {
            return upvotedStreamer;
          }
          return streamer;
        });
        return upvotedStreamers;
      });
    });

    return () => {
      socket.off("getAddedStreamer");
      socket.off("upvotedStreamer");
    };
  }, []);

  const getAllStreamers = async () => {
    const streamersData = await getStreamers();
    setStreamers(streamersData);
  };

  return (
    <div>
      <h1>Streamers List</h1>
      <ListGroup as="ul">
        {streamers.map((streamer) => (
          <Streamer key={streamer._id} streamer={streamer} />
        ))}
      </ListGroup>
    </div>
  );
};

export default StreamersList;

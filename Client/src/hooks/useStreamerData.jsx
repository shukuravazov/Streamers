import { useEffect, useState } from "react";
import { getStreamers } from "../api/streamersApi";
import { socket } from "../socket";

const useStreamersData = () => {
  const [streamers, setStreamers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllStreamers();

    socket.on("getAddedStreamer", (newAddedStreamer) => {
      setStreamers((prevStreamers) => [...prevStreamers, newAddedStreamer]);
    });
    socket.on("upvotedStreamer", (upvotedStreamer) => {
      setStreamers((prevStreamers) => {
        const upvotedStreamers = prevStreamers.map((streamer) => {
          if (streamer._id === upvotedStreamer._id) {
            return {
              ...upvotedStreamer,
              totalVotes: upvotedStreamer.totalVotes,
            };
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
    try {
      const streamersData = await getStreamers();
      setStreamers(streamersData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { streamers, isLoading, error };
};

export default useStreamersData;

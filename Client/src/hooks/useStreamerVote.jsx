import { useState } from "react";
import { updateStreamerVote } from "../api/streamersApi";
import useUserSessionId from "./useUserSessionId";

const useStreamerVote = (streamerId) => {
  const { userId } = useUserSessionId();
  const [voteStatus, setVoteStatus] = useState(null);

  const handleVote = async (voteType) => {
    try {
      await updateStreamerVote(userId, streamerId, voteType);
      if (voteType === "upvote" && voteStatus === "upvote") {
        setVoteStatus(null);
      } else if (voteType === "downvote" && voteStatus === "downvote") {
        setVoteStatus(null);
      } else {
        setVoteStatus(voteType);
      }
    } catch (error) {
      console.log("Error handling vote:", error);
    }
  };

  return { handleVote, voteStatus };
};

export default useStreamerVote;

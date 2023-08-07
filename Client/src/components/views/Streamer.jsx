import React from "react";
import StreamingPlatform from "../common/StreamingPlatform";
import useStreamerVote from "../../hooks/useStreamerVote";
import useLinkNavigation from "../../hooks/useLinkNavigation";
import { angleDown, angleUp, squareArrorUpRight } from "../../assets/icons";

const Streamer = ({ streamer }) => {
  const { navigateToLink } = useLinkNavigation();
  const { handleVote, voteStatus } = useStreamerVote(streamer._id);

  return (
    <div>
      <li className="list-item">
        <div className="list-item-image">
          <img
            src={streamer.profilePicture}
            className="streamer-image"
            alt="streamer"
          />
        </div>
        <div className="list-body">
          <h4 className="streamer-name">{streamer.name}</h4>
        </div>
        <div className="list-platform">
          <StreamingPlatform streamingPlatform={streamer.streamingPlatform} />
        </div>
        <div className="list-vote">
          <button
            data-testid="upvote-btn"
            className={`vote-button ${
              voteStatus === "upvote" ? "upvoted" : "default"
            }`}
            onClick={() => handleVote("upvote")}
          >
            {angleUp}
          </button>
          <p
            className={`vote-count ${
              voteStatus === "upvote"
                ? "upvoted"
                : voteStatus === "downvote"
                ? "downvoted"
                : "default"
            }`}
          >
            {streamer.totalVotes}
          </p>
          <button
            data-testid="downvote-btn"
            className={`vote-button ${
              voteStatus === "downvote" ? "downvoted" : "default"
            }`}
            onClick={() => handleVote("downvote")}
          >
            {angleDown}
          </button>
        </div>
        <div className="list-link">
          <button type="button" onClick={() => navigateToLink(streamer._id)}>
            {squareArrorUpRight}
          </button>
        </div>
      </li>
    </div>
  );
};

export default Streamer;

import React from "react";
import { useParams } from "react-router-dom";
import StreamingPlatform from "../components/common/StreamingPlatform";
import useStreamerRecord from "../hooks/useStreamerRecord";
import useLinkNavigation from "../hooks/useLinkNavigation";
import useLoadingAndErrorHandling from "../hooks/useLoadingAndErrorHandling";
import { arrowLeftLong } from "../assets/icons.js";

const StreamerRecord = () => {
  const { id } = useParams();
  const { streamer, isLoading, error } = useStreamerRecord(id);
  const { navigateToLink } = useLinkNavigation();
  const loadingAndErrorComponent = useLoadingAndErrorHandling(isLoading, error);

  if (loadingAndErrorComponent) {
    return loadingAndErrorComponent;
  }

  return (
    <div className="record-container" data-testid="streamer-record-page">
      <div className="info-container">
        <div className="body-container">
          {streamer && (
            <>
              <img
                src={streamer.profilePicture}
                alt="streamer"
                className="streamer-image"
              />
              <h2 className="streamer-name">{streamer.name}</h2>
              <div className="streamer-platform">
                <StreamingPlatform
                  streamingPlatform={streamer.streamingPlatform}
                />
              </div>
              <p className="streamer-description">{streamer.description}</p>

              <button
                className="btn btn-primary"
                data-testid="back-button"
                onClick={() => navigateToLink("/")}
              >
                {arrowLeftLong}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StreamerRecord;

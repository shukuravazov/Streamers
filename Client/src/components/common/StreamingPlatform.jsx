import React from "react";
import getPlatformIcon from "../../utils/platfromUtils";

const StreamingPlatform = ({ streamingPlatform }) => {
  const platformIcon = getPlatformIcon(streamingPlatform);

  return (
    <div className="platform-icon">
      {platformIcon}
      {streamingPlatform}
    </div>
  );
};

export default StreamingPlatform;

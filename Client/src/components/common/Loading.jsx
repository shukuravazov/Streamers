import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary me-3" role="status"></div>
      <h4>Loading...</h4>
    </div>
  );
};

export default Loading;

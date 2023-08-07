import React from "react";

const ErrorMessage = ({ error }) => {
  return error ? (
    <div className="alert alert-danger col-auto" data-testid="error-message">
      {error}
    </div>
  ) : null;
};

export default ErrorMessage;

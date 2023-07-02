import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <Button onClick={handleGoBack} variant="primary">
        Go back
      </Button>
    </>
  );
};

export default GoBack;

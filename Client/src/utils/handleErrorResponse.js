const handleErrorResponse = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    throw new Error(error.response.data.message);
  } else {
    throw error;
  }
};

export default handleErrorResponse;

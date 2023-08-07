import React from "react";
import Loading from "../components/common/Loading";
import DataNotFound from "../components/common/DataNotFound";

const useLoadingAndErrorHandling = (isLoading, error) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <DataNotFound message={error} />;
  }

  return null;
};

export default useLoadingAndErrorHandling;

import React from "react";
import { render, screen } from "@testing-library/react";
import useLoadingAndErrorHandling from "../../hooks/useLoadingAndErrorHandling";

jest.mock("../../components/common/Loading", () => {
  return () => <div data-testid="loading-mock">Loading...</div>;
});

jest.mock("../../components/common/DataNotFound", () => {
  return ({ message }) => (
    <div data-testid="data-not-found-mock">{message}</div>
  );
});

describe("useLoadingAndErrorHandling", () => {
  it("should render Loading component when isLoading is true", () => {
    render(useLoadingAndErrorHandling(true, null));
    const loadingElement = screen.getByTestId("loading-mock");
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render DataNotFound component with the provided error message", () => {
    const errorMessage = "Data not found";
    render(useLoadingAndErrorHandling(false, errorMessage));
    const dataNotFoundElement = screen.getByTestId("data-not-found-mock");
    expect(dataNotFoundElement).toBeInTheDocument();
    expect(dataNotFoundElement).toHaveTextContent(errorMessage);
  });
});

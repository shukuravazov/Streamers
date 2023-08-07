import { renderHook } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import useLinkNavigation from "../../hooks/useLinkNavigation";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("useLinkNavigation", () => {
  it("should call navigate with the provided link", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    const { result } = renderHook(() => useLinkNavigation());
    result.current.navigateToLink("/some/link");
    expect(mockNavigate).toHaveBeenCalledWith("/some/link");
  });
});

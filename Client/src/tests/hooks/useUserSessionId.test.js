import useUserSessionId from "../../hooks/useUserSessionId";
import { renderHook } from "@testing-library/react";

jest.mock("uuid", () => ({
  v4: jest.fn(),
}));

describe("useUserSessionId", () => {
  it("should generate and set a new user ID if not stored in session", () => {
    const mockGeneratedUserId = "generatedUserId";
    require("uuid").v4.mockReturnValue(mockGeneratedUserId);

    const { result } = renderHook(() => useUserSessionId());

    expect(result.current.userId).toBe(mockGeneratedUserId);
    expect(sessionStorage.getItem("user_id")).toBe(mockGeneratedUserId);
  });

  it("should set the stored user ID if available in session", () => {
    const storedUserId = "storedUserId";
    sessionStorage.setItem("user_id", storedUserId);

    const { result } = renderHook(() => useUserSessionId());

    expect(result.current.userId).toBe(storedUserId);

    sessionStorage.removeItem("user_id");
  });
});

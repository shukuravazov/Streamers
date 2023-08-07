import handleErrorResponse from "../../utils/handleErrorResponse";

describe("handleErrorResponse function", () => {
  it("should throw an error with custom message if error has response data message", () => {
    const error = {
      response: {
        data: {
          message: "Custom error message",
        },
      },
    };

    expect(() => {
      handleErrorResponse(error);
    }).toThrow("Custom error message");
  });

  it("should throw the original error if it doesn't have response data message", () => {
    const originalError = new Error("Original error message");

    expect(() => {
      handleErrorResponse(originalError);
    }).toThrow(originalError);
  });
});

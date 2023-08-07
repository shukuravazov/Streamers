import * as streamersApi from "../../api/streamersApi";
import useUserSessionId from "../../hooks/useUserSessionId";
import useStreamerVote from "../../hooks/useStreamerVote";
import { act, renderHook } from "@testing-library/react";

jest.mock("../../api/streamersApi", () => ({
  updateStreamerVote: jest.fn(),
}));

jest.mock("../../hooks/useUserSessionId", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useStreamerVote", () => {
  beforeEach(() => {
    useUserSessionId.mockReturnValue({ userId: "mockUserId" });
  });

  it("should handle upvote and set vote status correctly", async () => {
    streamersApi.updateStreamerVote.mockResolvedValue({});
    const streamerId = "streamer1";
    const { result } = renderHook(() => useStreamerVote(streamerId));
    expect(result.current.voteStatus).toBe(null);
    await act(async () => {
      await result.current.handleVote("upvote");
    });
    expect(streamersApi.updateStreamerVote).toHaveBeenCalledWith(
      "mockUserId",
      streamerId,
      "upvote"
    );
    expect(result.current.voteStatus).toBe("upvote");
  });

  it("should handle downvote and set vote status correctly", async () => {
    streamersApi.updateStreamerVote.mockResolvedValue({});
    const streamerId = "streamer1";
    const { result } = renderHook(() => useStreamerVote(streamerId));
    expect(result.current.voteStatus).toBe(null);
    await act(async () => {
      await result.current.handleVote("downvote");
    });
    expect(streamersApi.updateStreamerVote).toHaveBeenCalledWith(
      "mockUserId",
      streamerId,
      "downvote"
    );
    expect(result.current.voteStatus).toBe("downvote");
  });
});

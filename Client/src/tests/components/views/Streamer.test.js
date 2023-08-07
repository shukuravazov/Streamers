import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line jest/no-mocks-import
import { mockData } from "../../../__mocks__/streamersMockData";
import Streamer from "../../../components/views/Streamer";
import useStreamerVote from "../../../hooks/useStreamerVote";

jest.mock("../../../hooks/useStreamerVote");

const StreamerMock = ({ streamer }) => {
  return (
    <BrowserRouter>
      <Streamer streamer={streamer} />
    </BrowserRouter>
  );
};

describe("Streamers", () => {
  beforeEach(() => {
    useStreamerVote.mockReturnValue({
      handleVote: jest.fn(),
      voteStatus: "default",
    });
  });

  it("should render the streamer name successfully", () => {
    render(<StreamerMock streamer={mockData[0]} />);
    const streamerName = screen.getByRole("heading");
    expect(streamerName).toBeInTheDocument();
  });

  it("should call handleVote with 'upvote' when upvote button is clicked", async () => {
    const user = userEvent.setup();
    render(<StreamerMock streamer={mockData[0]} />);
    const upvoteButton = screen.getByTestId("upvote-btn");
    await user.click(upvoteButton);
    expect(useStreamerVote().handleVote).toHaveBeenCalledWith("upvote");
  });

  it("should call handleVote with 'downvote' when downvote button is clicked", async () => {
    const user = userEvent.setup();
    render(<StreamerMock streamer={mockData[0]} />);
    const upvoteButton = screen.getByTestId("downvote-btn");
    await user.click(upvoteButton);
    expect(useStreamerVote().handleVote).toHaveBeenCalledWith("downvote");
  });

  it("should render the vote count with the default style", () => {
    render(<StreamerMock streamer={mockData[0]} />);
    const voteCountElement = screen.getByText(
      mockData[0].totalVotes.toString()
    );
    expect(voteCountElement).toBeInTheDocument();
    expect(voteCountElement).toHaveClass("vote-count default");
  });
});

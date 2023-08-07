import axios from "axios";
import {
  getStreamers,
  postStreamer,
  getStreamerById,
  updateStreamerVote,
  BASE_URL,
} from "../../api/streamersApi";


jest.mock("axios");
jest.mock("../../utils/handleErrorResponse");

describe("streamersApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch streamers", async () => {
    const mockStreamers = [{ id: 1, name: "Streamer 1" }];
    axios.get.mockResolvedValueOnce({ data: mockStreamers });

    const response = await getStreamers();

    expect(response).toEqual(mockStreamers);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/streamers`);
  });

  it("should post a new streamer", async () => {
    const newStreamer = {
      name: "New Streamer",
      streamingPlatform: "Twitch",
      description: "A new streamer",
    };
    axios.post.mockResolvedValueOnce();

    await postStreamer(newStreamer);

    expect(axios.post).toHaveBeenCalledWith(
      `${BASE_URL}/streamers`,
      newStreamer
    );
  });

  it("should fetch a streamer by ID", async () => {
    const mockStreamer = { id: 1, name: "Streamer 1" };
    const streamerId = 1;
    axios.get.mockResolvedValueOnce({ data: mockStreamer });

    const response = await getStreamerById(streamerId);

    expect(response).toEqual(mockStreamer);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/streamer/${streamerId}`
    );
  });

  it("should update a streamer's vote", async () => {
    const userId = 123;
    const streamerId = 1;
    const voteType = "upvote";
    axios.put.mockResolvedValueOnce();

    await updateStreamerVote(userId, streamerId, voteType);

    expect(axios.put).toHaveBeenCalledWith(
      `${BASE_URL}/streamers/${streamerId}/vote`,
      { userId, voteType }
    );
  });
});

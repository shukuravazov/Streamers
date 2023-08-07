import axios from "axios";
import handleErrorResponse from "../utils/handleErrorResponse.js";

const BASE_URL = "http://localhost:8001";

const getStreamers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/streamers`);
    return response.data;
  } catch (error) {
    handleErrorResponse(error);
  }
};

const postStreamer = async (props) => {
  try {
    await axios.post(`${BASE_URL}/streamers`, {
      name: props.name,
      streamingPlatform: props.streamingPlatform,
      description: props.description,
    });
  } catch (error) {
    handleErrorResponse(error);
  }
};

const getStreamerById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/streamer/${id}`);
    return data;
  } catch (error) {
    handleErrorResponse(error);
  }
};

const updateStreamerVote = async (userId, streamerId, voteType) => {
  try {
    await axios.put(`${BASE_URL}/streamers/${streamerId}/vote`, {
      userId,
      voteType,
    });
  } catch (error) {
    handleErrorResponse(error);
  }
};

export {
  getStreamers,
  postStreamer,
  getStreamerById,
  updateStreamerVote,
  BASE_URL,
};

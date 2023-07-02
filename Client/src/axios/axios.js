import axios from "axios";

export const BASE_URL = "http://localhost:8001";

export async function getStreamers() {
  try {
    const response = await axios.get(`${BASE_URL}/streamers`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

export async function postStreamer(props) {
  try {
    await axios.post(`${BASE_URL}/streamers`, {
      name: props.name,
      streamingPlatform: props.streamingPlatform,
      description: props.description,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getStreamerById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/streamer/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStreamerVote(streamerId, voteType) {
  try {
    await axios.put(`${BASE_URL}/streamers/${streamerId}/vote`, {
      voteType,
    });
  } catch (error) {
    console.log(error);
  }
}

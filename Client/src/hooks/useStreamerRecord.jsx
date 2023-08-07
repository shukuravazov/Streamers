import { useCallback, useEffect, useState } from "react";
import { getStreamerById } from "../api/streamersApi";

const useStreamerRecord = (id) => {
  const [streamer, setStreamer] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStreamer = useCallback(async () => {
    try {
      const streamerData = await getStreamerById(id);
      setStreamer(streamerData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getStreamer();
  }, [getStreamer]);

  return { streamer, isLoading, error };
};

export default useStreamerRecord;

import { useState } from "react";
import { postStreamer } from "../api/streamersApi";
import useFormInput from "./useFormInput";

const useStreamerForm = () => {
  const nameInput = useFormInput("");
  const platformInput = useFormInput("");
  const descriptionInput = useFormInput("");
  const [error, setError] = useState({
    name: "",
    streamingPlatform: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStreamer = {
      name: nameInput.value,
      streamingPlatform: platformInput.value,
      description: descriptionInput.value,
    };
    try {
      await postStreamer(newStreamer);
      nameInput.onChange({ target: { value: "" } });
      platformInput.onChange({ target: { value: "" } });
      descriptionInput.onChange({ target: { value: "" } });
      setError({
        name: "",
        streamingPlatform: "",
        description: "",
      });
    } catch (error) {
      const { name, streamingPlatform, description } =
        error.response.data.errors;
      setError({
        name: name || "",
        streamingPlatform: streamingPlatform || "",
        description: description || "",
      });
    }
  };

  return {
    nameInput,
    platformInput,
    descriptionInput,
    handleSubmit,
    error,
  };
};

export default useStreamerForm;

import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import ErrorMessage from "../common/ErrorMessage";
import useStreamerForm from "../../hooks/useStreamerForm";

const StreamerForm = () => {
  const { nameInput, platformInput, descriptionInput, handleSubmit, error } =
    useStreamerForm();

  const platformOptions = [
    { value: "Twitch", label: "Twitch" },
    { value: "YouTube", label: "YouTube" },
    { value: "TikTok", label: "TikTok" },
    { value: "Kick", label: "Kick" },
    { value: "Rumble", label: "Rumble" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="streamer-form">
        <InputField
          name="name"
          label="Name"
          placeholder="Enter name"
          value={nameInput.value}
          onChange={nameInput.onChange}
        />
        <ErrorMessage error={error.name} />
        <SelectField
          name="platform"
          label="Streaming Platform"
          value={platformInput.value}
          onChange={platformInput.onChange}
          options={platformOptions}
        />
        <ErrorMessage error={error.streamingPlatform} />
        <TextAreaField
          name="description"
          label="Description"
          placeholder="Enter description"
          value={descriptionInput.value}
          onChange={descriptionInput.onChange}
        />
        <ErrorMessage error={error.description} />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default StreamerForm;

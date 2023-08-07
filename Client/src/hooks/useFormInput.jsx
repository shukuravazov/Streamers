import { useState } from "react";

const useFormInput = (initialValut = "") => {
  const [value, setValue] = useState(initialValut);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;

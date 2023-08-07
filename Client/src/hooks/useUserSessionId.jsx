import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useUserSessionId = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const generateUserId = () => {
      const storedUserId = sessionStorage.getItem("user_id");
      if (storedUserId) {
        return storedUserId;
      } else {
        const newUserId = uuidv4();
        sessionStorage.setItem("user_id", newUserId);
        return newUserId;
      }
    };

    const newUserId = generateUserId();
    setUserId(newUserId);
  }, []);

  return { userId };
};

export default useUserSessionId;

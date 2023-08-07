import { useNavigate } from "react-router-dom";

const useLinkNavigation = () => {
  const navigate = useNavigate();

  const navigateToLink = (link) => {
    navigate(link);
  };

  return { navigateToLink };
};

export default useLinkNavigation;

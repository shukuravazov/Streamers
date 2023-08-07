import Streamer from "./Streamer";
import useStreamersData from "../../hooks/useStreamerData";
import useLoadingAndErrorHandling from "../../hooks/useLoadingAndErrorHandling";

const StreamersList = () => {
  const { streamers, isLoading, error } = useStreamersData();
  const loadingAndErrorComponent = useLoadingAndErrorHandling(isLoading, error);

  if (!streamers || !streamers.length) {
    return <div>No Streamers</div>;
  }

  if (loadingAndErrorComponent) {
    return loadingAndErrorComponent;
  }

  return (
    <>
      <ul className="list" data-testid="streamers-list">
        {streamers &&
          streamers.map((streamer) => (
            <Streamer key={streamer._id} streamer={streamer} />
          ))}
      </ul>
    </>
  );
};

export default StreamersList;

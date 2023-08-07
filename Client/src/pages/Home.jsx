import StreamerForm from "../components/forms/StreamerForm";
import StreamersList from "../components/views/StreamersList";

const Home = () => {
  return (
    <div className="home-container" data-testid="home-page">
      <div className="streamer-list-container">
        <StreamersList />
      </div>
      <div className="streamer-form-container">
        <StreamerForm />
      </div>
    </div>
  );
};

export default Home;

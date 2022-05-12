import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to</h2>
      <h2 className="home-subtitle">SportSee</h2>
      <p>You can check users statistics by clicking the following links:</p>
      <Link to={`/user/12`}>Karl's statistics</Link>
      <Link to={`/user/18`}>Cecilia's statistics</Link>
    </div>
  );
}

export default Home;

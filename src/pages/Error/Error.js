import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="error-container">
      <h2 className="error-title">Error 404</h2>
      <h3>This page doesn't exist</h3>
      <Link className="error-return" to="/">Go back to home page</Link>
    </div>
  );
}

export default Error;

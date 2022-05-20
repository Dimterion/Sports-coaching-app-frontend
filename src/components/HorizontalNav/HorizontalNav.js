import logo from "../../assets/sportSee-logo.svg";
import { Link } from "react-router-dom";
import "./horizontalNav.css";

/**
 * Component for the horizontal navigation bar.
 * @example
 * returns (
 *  <HorizontalNav />
 * )
 */

function HorizontalNav() {
  return (
    <nav className="horizontalNav-container">
      <img src={logo} alt="SportSee logo" />
      <div className="horizontalNav-nav">
        <Link to="/">Home</Link>
        <Link to="/">Profile</Link>
        <Link to="/">Settings</Link>
        <Link to="/">Community</Link>
      </div>
    </nav>
  );
}

export default HorizontalNav;

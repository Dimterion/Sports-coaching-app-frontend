import meditationIcon from "../../assets/meditation-icon.png";
import swimmingIcon from "../../assets/swimming-icon.png";
import bicycleIcon from "../../assets/bicycle-icon.png";
import dumbbellIcon from "../../assets/dumbbell-icon.png";
import { Link } from "react-router-dom";
import "./verticalNav.css";

/**
 * Component for the vertical navigation bar.
 * @example
 * returns (
 *  <VerticalNav />
 * )
 */

function VerticalNav() {
  return (
    <div className="verticalNav-container">
      <nav className="verticalNav-menu-container">
        <Link to="/">
          <img src={meditationIcon} alt="Meditation icon" />
        </Link>
        <Link to="/">
          <img src={swimmingIcon} alt="Swimming icon" />
        </Link>
        <Link to="/">
          <img src={bicycleIcon} alt="Bicycle icon" />
        </Link>
        <Link to="/">
          <img src={dumbbellIcon} alt="Dumbbell icon" />
        </Link>
      </nav>
      <p className="verticalNav-text-container">Copyright, SportSee 2022</p>
    </div>
  );
}

export default VerticalNav;

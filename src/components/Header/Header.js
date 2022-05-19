import "./header.css";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>Hello</h2>
        <h2 className="header-title-name">{props.firstName}</h2>
      </div>
      <p className="header-text">
        Congratulations! You reached yesterday’s goal! 👏
      </p>
    </div>
  );
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};

Header.defaultProps = {
  firstName: "User",
};

export default Header;

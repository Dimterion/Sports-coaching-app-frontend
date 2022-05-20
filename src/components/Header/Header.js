import "./header.css";
import PropTypes from "prop-types";

/**
 * Component for the header.
 * @param {string} firstName // Using user's first name to display on the page through props.
 * @example
 * const firstName = "Name";
 * returns (
 *  <Header firstName={firstName} />
 * )
 */

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

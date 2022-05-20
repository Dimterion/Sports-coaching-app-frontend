import caloriesIcon from "../../assets/calories-icon.png";
import proteinsIcon from "../../assets/proteins-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import lipidsIcon from "../../assets/lipids-icon.png";
import "./card.css";
import PropTypes from "prop-types";

/**
 * Component for the cards.
 * @param {number} ItemQuantity // Using cards items quantities to display on the cards through props.
 * @example
 * const ItemQuantity = 1930;
 * returns (
 *  <Card ItemQuantity={ItemQuantity} />
 * )
 */

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <img src={caloriesIcon} alt="Calories icon" />
        <div>
          <span>{props.firstItemQuantity}kCal</span>
          <div>Calories</div>
        </div>
      </div>
      <div>
        <img src={proteinsIcon} alt="Proteins icon" />
        <div>
          <span>{props.secondItemQuantity}g</span>
          <div>Proteins</div>
        </div>
      </div>
      <div>
        <img src={carbsIcon} alt="Carbs icon" />
        <div>
          <span>{props.thirdItemQuantity}g</span>
          <div>Carbs</div>
        </div>
      </div>
      <div>
        <img src={lipidsIcon} alt="Lipids icon" />
        <div>
          <span>{props.fourthItemQuantity}g</span>
          <div>Lipids</div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  firstItemQuantity: PropTypes.number.isRequired,
  secondItemQuantity: PropTypes.number.isRequired,
  thirdItemQuantity: PropTypes.number.isRequired,
  fourthItemQuantity: PropTypes.number.isRequired,
};

Card.defaultProps = {
  firstItemQuantity: 0,
  secondItemQuantity: 0,
  thirdItemQuantity: 0,
  fourthItemQuantity: 0,
};

export default Card;

import caloriesIcon from "../../assets/calories-icon.png";
import proteinsIcon from "../../assets/proteins-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import lipidsIcon from "../../assets/lipids-icon.png";
import "./card.css";

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

export default Card;

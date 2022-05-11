function Card(props) {
  return (
    <div>
      <img src={props.icon} alt={props.icon} />
      <span>{props.quantity}</span>
      <span>{props.name}</span>
    </div>
  );
}

export default Card;

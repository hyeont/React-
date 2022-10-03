//일반적으로 Card라고 하면
//둥근 모서리에 옅은 그림자가 있는 컨테이너를 뜻함
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

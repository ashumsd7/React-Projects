import classes from "./Card.module.css";

function Card(props) {
    // console.log({...props})
  return <div onClick={props.onClick} className={`${classes.card} ${props.cssClass} ${props.className}`}>{props.children}</div>;
}

export default Card;

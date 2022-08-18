import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCarrtButton   from "./HeaderCarrtButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>zylus Meals</h1>
        <HeaderCarrtButton onClick={props.onShowCart}/>
      </header>

      <div className={['main-image']}>
        {/* <img
          alt="food image"
          src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
        ></img> */}
      </div>
    </Fragment>
  );
};

export default Header;

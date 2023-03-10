import CartIcon from "../../assets/cart-icon.svg";
import style from "./cartWidget.module.css";

const CartWidget = ({ content }) => {
  return (
    <div>
      <img className={style.icon} src={CartIcon} alt="" />
      <div className={style.counter}>{content}</div>
    </div>
  );
};

export default CartWidget;

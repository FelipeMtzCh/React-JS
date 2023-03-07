import style from "./CartList.module.css";

const CartList = ({Logo}) => {
  return (
    <div>
      <img className={style.cartIcon} src={Logo} alt="Cart Icon" />
      <div className={style.cartCounter}> 0 </div>
    </div>
  );
};

export default CartList;

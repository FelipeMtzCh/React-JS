import style from "./Logo.module.css";

const MainLogo = ({ Logo }) => {
  return (
    <div>
      <img className={style.logo} src={Logo} alt="" />
    </div>
  );
};

export default MainLogo;

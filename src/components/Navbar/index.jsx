import { Button, ButtonGroup } from "@mui/material";
import Logo from "../../assets/logo.png";
import CartWidget from "../CartWidget";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Todas</Button>
          <Button>Cafés</Button>
          <Button>Endulzantes</Button>
          <Button>Maquinas</Button>
          <Button>Accesorios</Button>
          <Button>Descuentos</Button>
        </ButtonGroup>
        <img src={Logo} className={style.logo} alt="Logo" />
        <CartWidget content = "7"/>
      </nav>
    </div>
  );
};

export default Navbar;
import style from "./App.module.css";
import Logo from "./assets/Logo_75x75.png";
import CartIcon from "./assets/shopping-cart.svg";
import MainLogo from "./components/MainLogo";
import CartList from "./components/CartList";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  return (
    <main className="App">
      <header className={style.header}>
        <nav className={style.navbar}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>Todas</Button>
            <Button>Cafés</Button>
            <Button>Endulzantes</Button>
            <Button>Maquinas</Button>
            <Button>Accesorios</Button>
            <Button>Descuentos</Button>
          </ButtonGroup>
        </nav>
        <MainLogo Logo={Logo} />
        <CartList Logo={CartIcon} />
      </header>
    </main>
  );
}

export default App;

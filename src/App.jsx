import axios from "axios";
import { useEffect, useState } from "react";
import style from "./App.module.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

{
  /*

  -> Navbar.jsx => App.jsx
  -> cartWidget.jsx => Nabvar.jsx
  -> itemListContainer.jsx => App.jsx

*/
}

function App() {
  const [products, setProducts] = useState([]);

  //*Axios*//
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="App">
      <Navbar />
      <div className={style.container}>
        <ItemListContainer products={products} />
      </div>
    </main>
  );
}

export default App;

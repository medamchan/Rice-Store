import { useState } from "react";
import Header from "./components/Header";
import RiceList from "./components/RiceList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (rice) => {
    setCart([...cart, rice]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <RiceList addToCart={addToCart} />
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;

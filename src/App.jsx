import "./App.css";
import NavBar from "./component/NavBar/NavBar.jsx";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {CartContextProvider} from "./context/cartContext"
import CartView from "./component/CartView/CartView";
import ThankYou from "./component/TrankYou/ThankYou"
function App() {

  return (
    <div className="App">
      <CartContextProvider>
 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Ninja" />}/>
          <Route path="/category/:categoryID" element={<ItemListContainer/>}/>
          <Route path="/item/:itemID" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<CartView/>}/> 
          <Route path="/thankyou/:orderID" element={<ThankYou/>}></Route>
          <Route path="*" element={<h4>Te Perdiste!! Error: 404</h4>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;

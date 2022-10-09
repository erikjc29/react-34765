import "./App.css";
import NavBar from "./component/NavBar/NavBar.jsx";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Ninja" />}/>
          <Route path="/category/:categoryID" element={<ItemListContainer/>}/>
          <Route path="/item/:itemID" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<h4>Te Perdiste!!</h4>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

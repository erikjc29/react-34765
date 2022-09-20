import './App.css';
import NavBar from './component/NavBar/NavBar.jsx';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a Horuk Games"/>
    </div>
  );
}

export default App;

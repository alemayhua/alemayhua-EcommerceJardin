import './App.css';
import './ItemListContainer.js'
import Menu from './components/NavBar.js';
import ItemListContainer from './ItemListContainer.js';

let nombre = "Mundo Verde";

function App() {
  return (
    <div>
    <Menu />
    <ItemListContainer greeting={nombre} />
    </div>
  );
}

export default App;

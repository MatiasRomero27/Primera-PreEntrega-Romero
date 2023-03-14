import './app.css';
import Navbar from './Navbar/Navbar';

function App (){
  return (
    <div>
    <Navbar/>
    <h1>MY APP</h1>
    <ItemListContainer greeting="HOLA, SEA BIENVENIDO" />
    </div>
  );
}

export default App;


import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

 
function App() {

  return (
    <>    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
      <Button>Hola!</Button>  
      </>
 
  );
}

export default App;

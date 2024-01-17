import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import App from "./App"

function App() {
return(
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"}/>
        <ItemDetailContainer />
    </div>
)

}

export default App
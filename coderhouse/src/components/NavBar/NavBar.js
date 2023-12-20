import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Vestimenta</button>
                <button>Accesorios</button>
                <button>Calzado</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
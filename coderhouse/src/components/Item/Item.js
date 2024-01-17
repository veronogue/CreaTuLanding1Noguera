import "./Item.css"

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    Vestido
                </h2>
            </header>
            <picture>
                <img src=" " alt="" className=""/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalles</button>
            </footer>
        </article>
    )
}
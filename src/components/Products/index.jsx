import { Card } from "./Cards"

export const ProductsList = ({ products, count, setCount, buy, setBuy }) => {
    return (
        <section >
            <p>List</p>
            <ul>
                {products.map((product) => (
                    <Card key={product.id} buy={buy} setBuy={setBuy} product={product} count={count} setCount={setCount} />
                ))}
            </ul>
        </section>
    )
}


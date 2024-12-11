
export const Card = ({ product, count, setCount, buy, setBuy }) => {
    const addCar = () => {
    setBuy([...buy, product])
    setCount(count + 1)
    }

    return (
        <li >
            <img src={product.img} alt="Products" />
            <button onClick={addCar}>Comprar</button>
        </li>
    )
}

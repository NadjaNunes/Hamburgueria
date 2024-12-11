
export const ModalCard = ({ product, buy, setBuy, setCount, count }) => {
    const removeCar = (productId) => {
        const setBuyFilter = buy.filter(({ id }) => id !== productId)
        setBuy(setBuyFilter)
        setCount(count - 1)
    };

    return (
        <li >
            <img src={product.img} alt="Product" />
            <button onClick={() => removeCar(product.id)}>Remover</button>
        </li>
    )
}

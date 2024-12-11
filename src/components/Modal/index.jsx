import { ModalCard } from "./ModalCard";

export const Modal = ({ setOpen, buy, setBuy, setCount, count }) => {
    return (
        <>
            <div>
                <div >
                    <header>
                        <h2>Carrinho de Compras</h2>
                        <p onClick={() => setOpen(false)}>X</p>
                    </header>
                    <div>
                        <ul>
                            {buy.map((product) => (
                                <ModalCard key={product.id} product={product} buy={buy} setBuy={setBuy} setCount={setCount} count={count}/>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Total</h3>
                        <p>Valor</p>
                    </div>
                </div>
            </div>
        </>
    );
};

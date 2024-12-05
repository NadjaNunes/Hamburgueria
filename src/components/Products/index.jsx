import { useState } from "react";
import { ListCar } from "../../services/api";

export const ProductsList = () => {

    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const {data} = await ListCar.get('/products')
        setProducts(data)
        
    }
    getProducts()
    return(
            <section>
                <p>List</p>
                <ul>
                    {
                    products.map(product => (<li key={product.id}>
                        <img src={product.img} alt="Products" />
                    </li>))
                    }
                </ul>
            </section>
    )
} 
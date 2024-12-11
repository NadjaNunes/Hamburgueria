import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { ProductsList } from './components/Products'
import { useEffect, useState } from 'react'
import { ListCar } from './services/api'

function App() {

  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [buy, setBuy] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await ListCar.get("/products")
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <>
      <Header setOpen={setOpen} count={count}  />
      {open ? < Modal setOpen={setOpen} buy={buy} setBuy={setBuy} count={count} setCount={setCount} /> : null}
      <ProductsList buy={buy} setBuy={setBuy} products={products} count={count} setCount={setCount} />
    </>
  )
}

export default App


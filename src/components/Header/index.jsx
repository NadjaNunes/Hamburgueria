import { Modal } from "../Modal"
import img from "../../assets/cart.svg"
import logo from "../../assets/logo_burguer.png"

export const Header = () =>{
    return(
        <>
        <header>
            <img src={logo} alt="store logo"/>
            <img src={img} alt="shopping car" />            
        </header>
        </>
    )
}
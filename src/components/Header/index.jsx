import img from "../../assets/cart.svg"
import logo from "../../assets/logo_burguer.png"
import { useState } from "react"

export const Header = ({ count, setOpen }) => {
    return (
        <header>
            <img src={logo} alt="store logo" />
            <p>{count}</p>
            <img onClick={() => setOpen(true)} src={img} alt="shopping car" />
        </header>
    );
};

import { useState } from 'react';
import Overlay from './Overlay';
const Navbar=()=>{
    const [toggle,setToggle]=useState(false);
    const onToggle=()=>{
        setToggle(!toggle);
    }
return (
    <nav>
        <img src={require("../images/logo.svg").default} alt="logo"/>
        
        <ul>
            <li><a href="#!">Features</a></li>
            <li><a href="#!">Pricing</a></li>
            <li><a href="#!">Resources</a></li>
        </ul>
        <ul className="auth">
            <li><a href="#!">Login</a></li>
            <li><a href="#!" className="auth__nav-button">Sign up</a></li>
        </ul>
        <div className="nav-menu" onClick={onToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Overlay className={toggle ? "show" :"hidden"} onToggle={onToggle}/>
    </nav>
)
};
export default Navbar;
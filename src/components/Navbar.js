const Navbar=()=>{
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
        <div className="nav-menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
)
};
export default Navbar;
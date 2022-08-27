
const MobileNav=(props)=>{
    return <div className={`mobile-nav ${props.className}`}>
        <ul>
            <li><a href="#!">Features</a></li>
            <li><a href="#!">Pricing</a></li>
            <li><a href="#!">Resources</a></li>
        </ul>
        <hr/>
        <ul>
            <li><a href="#!">Login</a></li>
            <li><a href="#!" className="auth__nav-button">Sign up</a></li>
        </ul>
    </div>
};
export default MobileNav;
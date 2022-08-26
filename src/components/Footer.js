const Footer = () => {
    return <footer>
        <div className="first-part">
            <h1>Boost Your links today</h1>
            <button>Get Started</button>
        </div>
        <div className="seond-part">
            <img src={require("../images/logo.svg").default} alt="brand logo" />
            <ul className="seond-part__main-nav-containers">
                <li>
                    <span>Features</span>
                    <ul className="seond-part__main-nav-containers__navs">
                        <li><a href="#!">Link Shortening</a></li>
                        <li><a href="#!">Branded Links</a></li>
                        <li><a href="#!">Analytics</a></li>
                    </ul>
                </li>
                <li>
                    <span>Resources</span>
                    <ul className="seond-part__main-nav-containers__navs">
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Developers</a></li>
                        <li><a href="#!">Support</a></li>
                    </ul>
                </li>
                <li>
                    <span>Company</span>
                    <ul className="seond-part__main-nav-containers__navs">
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Our Team</a></li>
                        <li><a href="#!">Careers</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </li>
                <li>
                    <ul className="seond-part__main-nav-containers__icons">
                        <li><a href="#!"><img src={require("../images/icon-facebook.svg").default} alt="facebook" /></a></li>
                        <li><a href="#!"><img src={require("../images/icon-twitter.svg").default} alt="twitter" /></a></li>
                        <li><a href="#!"><img src={require("../images/icon-pinterest.svg").default} alt="printerest" /></a></li>
                        <li><a href="#!"><img src={require("../images/icon-instagram.svg").default} alt="instagram" /></a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
};
export default Footer;
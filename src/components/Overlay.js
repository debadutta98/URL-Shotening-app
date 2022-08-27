import MobileNav from "./MobileNav";
import  ReactDOM  from "react-dom";
const Overlay=(props)=>{
    const onBackDropClickListener=()=>{
        props.onToggle();
    }
    return <>
        {ReactDOM.createPortal(
            <div className={`overlay-backdrop ${props.className}`} onClick={onBackDropClickListener}></div>, 
        document.getElementById("overlay"))}
        {ReactDOM.createPortal(<MobileNav className={props.className}/>,
        document.getElementById("nav-modal"))}
    </> 
};
export default Overlay;
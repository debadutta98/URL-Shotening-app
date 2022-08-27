import { useRef, useState } from "react";
import { isUri } from "valid-url";
const UserActionCard=(props)=>{
    const [ disable, setDisable ] = useState(false);
    const [valid,setValidity]=useState(true);
    const inputurl=useRef();

    const onSubmitURL=async (event)=>{
        event.preventDefault();
        setDisable(true);
        //url validation 
        if(isUri(inputurl.current.value))
        {
            await fetch(`https://api.shrtco.de/v2/shorten?url=${inputurl.current.value}`)
            .then(async (res)=>await res.json())
            .then((data)=>{
                props.onAddURL(
                    {
                        originalURL:inputurl.current.value,
                        shortURL: data?.result?.full_short_link
                    }
                );
            }).catch((error)=>{
                console.log("failed to fetch");
            })
            setValidity(true);
        }else{
            console.log("invalid url");
            setValidity(false);
        }
        inputurl.current.value = "";
        setDisable(false);
    }
    return  <form className="user-action-card" onSubmit={onSubmitURL}>
        <div className="user-action-card__inputcontainer">
        <input 
        type="url" 
        placeholder="Shorton a link here..." 
        className={`user-action-card__inputcontainer__input ${!valid && "invalid"}`}
        ref={inputurl}
        />
            <span style={{ visibility: `${!valid ? "visible" :"hidden"}` }}>Please add a valid link</span>
        </div>
        <button className="user-action-card__btn" disabled={disable}>Shorten It!</button>
    </form>
};
export default UserActionCard;
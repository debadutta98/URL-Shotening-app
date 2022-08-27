import { useState } from "react";
import Features from "./Features";
import Result from "./Result";
import UserActionCard from "./UserActionCard";
const Main=()=>{
const [urlList,addToURList]=useState([]);
const onAddURL=(newurl)=>{
    addToURList(state=>([
        ...state,
        {
        ...newurl,
        id:"a"+(urlList.length+1)
        }
    ]));
};
return (<main>
    <UserActionCard onAddURL={onAddURL}/>
    {
    urlList.length>0 && <ul className="shorten-link-results">
        {urlList.map((value,index)=>{
            return <Result key={value.id} result={value}/>
        })}
    </ul>
    }
    <Features/> 
</main>)
}
export default Main;
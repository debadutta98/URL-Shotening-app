const Result=(props)=>{
    const onCopy=(element_id,copied_text)=>{
        const button=document.getElementById(element_id);
        button.style.backgroundColor ="hsl(257, 27%, 26%)";
        button.innerText="Copied!"
        navigator.clipboard.writeText(copied_text);
    }
    return <li className="shorten-link-results__result">
        <span>{props.result.originalURL}</span>
        <div className="shorten-link-results__result__container">
            <span>{props.result.shortURL}</span>
            <button id={props.result.id} onClick={onCopy.bind(null, props.result.id, props.result.shortURL)}>Copy</button>
        </div>
    </li>
}
export default Result;
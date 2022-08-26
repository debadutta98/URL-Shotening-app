const FeatureCard=(props)=>{
    return <div className={props.className}>
        <div className={`${props.className}__img-container`}>
        <img src={props.icon} alt={props.title}/>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>;
};
export default FeatureCard;
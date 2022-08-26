import FeatureCard from "./FeatureCard";
const featurecardContent=
[
    {
        icon:require("../images/icon-brand-recognition.svg").default,
        title:"Brand Recognition",
        description:`Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`
    },
    {
        icon:require("../images/icon-detailed-records.svg").default,
        title:"Detailed Records",
        description:`Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`
    },
    {
        icon:require("../images/icon-fully-customizable.svg").default,
        title:"Fully Customizable",
        description:`Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`
    }
]
const Features=()=>{
    return <div className="features">
        <div className="features__container">
            <h1>Advanced Statistics</h1>
            <p>Track How your links are performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className="feature-card-container">
        {
            featurecardContent.map((value,index)=>{
                return <FeatureCard icon={value.icon} title={value.title} description={value.description} key={index} className={"featureCard-"+(index+1)}/>
            })
        }
        </div>
    </div>;
};
export default Features;

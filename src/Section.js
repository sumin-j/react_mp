import Card from "./Card";
const path = process.env.PUBLIC_URL;

function Section(){
    const arr=['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];

    return(
        <section className="wrap">
            {arr.map((data,idx)=>{
                return <Card key={idx} data={data} path={path} />      
            })}
        </section>
    )
}

export default Section;


    
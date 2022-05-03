import Card from "./Card";
const path = process.env.PUBLIC_URL;

function Section(){
    const arr=['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
    const num = arr.length;

    return(
        <section className="wrap" style={{top: '120%'}}>
            {arr.map((data,idx)=>{
                return <Card key={idx} data={data} path={path} num={num} index={idx} />      
            })}
        </section>
    )
}

export default Section;


    
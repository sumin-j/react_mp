const path = process.env.PUBLIC_URL;

function Section(){
    const arr=['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];




    return(
        <section className="wrap">
            {arr.map((data,idx)=>{
                return (
                <article key={idx}>
                    <p>{data}</p>
                    <img src={`${path}/img/${data}.jpg`} />
                </article>
                )
            })}
        </section>
    )
}

export default Section;
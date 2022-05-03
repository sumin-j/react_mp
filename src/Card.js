function Card(props){
    console.log(props);
    return(
        <article>
                    <div className="inner">
                        <div className="pic">
                            <img src={`${props.path}/img/${props.data}.jpg`} />
                        </div>
                        <h2>{props.data}</h2> 
                    </div>
                </article>
    )
}

export default Card;


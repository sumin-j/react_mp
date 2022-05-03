import Card from "./Card";
import Btns from "./Btns";
import {useRef} from 'react';

import {useState} from 'react';
const path = process.env.PUBLIC_URL;

function Section(){
    const wrap = useRef(null);
    console.log(wrap);
    const arr=['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
    const num = arr.length;
    
    return(
        <>
            <section className="wrap" ref={wrap}>
            {arr.map((data,idx)=>{
                return <Card key={idx} data={data} path={path} num={num} index={idx} />      
            })}
            </section>

            <Btns wrap={wrap}/>
        </>
    )
}

export default Section;

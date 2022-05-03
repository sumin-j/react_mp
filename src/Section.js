import Card from "./Card";
import Btns from "./Btns";
import {useRef} from 'react';

/*
    useRef는 특정 DOM을 직접적으로 제어하지 않고 제어할 
    대상을 미리 참조하기 위한 hook

    순서1-const 변수 = useRef(null); : current라는 키값을 가지고 있는 비어있는 객체가 생성됨
    순서2-해당 객체를 참조하고 싶은 가상DOM에 ref={객체}

    useRef로 할당된 값은 설사 다른 state의 변경에 의해서 컴포넌트가 재렌더링되더라도 값이 사라지지않음.
    useRef로 할당된 값은 해당 값이 변경되더라도 컴포넌트를 재호출하지 않음.
*/

// import {useState} from 'react';
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

import Card from "./Card";
import {useState} from 'react';
const path = process.env.PUBLIC_URL;

function Section(){
    console.log('section 함수 재호출')
    const arr=['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
    const num = arr.length;
    let [index, setIndex] = useState(0);
    console.log(index);
    
    return(
        <>
            <section className="wrap" style={{transform: `rotate(${45*index}deg)`}}>
            {arr.map((data,idx)=>{
                return <Card key={idx} data={data} path={path} num={num} index={idx} />      
            })}
            </section>

            <a href="#" className="prev" onClick={()=>{setIndex(++index)}}></a>
            <a href="#" className="next" onClick={()=>{setIndex(--index)}}></a>
        </>
    )
}

export default Section;

/*
    useState훅은 배열을 리턴
    첫번째 배열값 : 앞으로 변경이 일어날 state값
    두번째 배열값 : 해당 상태값을 변경시킬 수 있는 state변경함수
    **컴포넌트 함수 안쪽에서 state값이 변경이 되면 해당 컴포넌트 함수가 다시 호출되면서 화면이 재 렌더링됨**
    state값 변경으로 재 렌더링이 일어나려면 무조건 state변경함수로만 변경을 해야지 재렌더링됨
*/
    
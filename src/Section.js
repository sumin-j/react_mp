import Card from "./Card";
const path = process.env.PUBLIC_URL;

function Section(){
    const arr=['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];

    return(
        <section className="wrap">
            {arr.map((data,idx)=>{
                // 자식인 Card 컴포넌트로 data,path정보값을 props로 전달
                return <Card key={idx} data={data} path={path} />      
            })}
        </section>
    )
}

export default Section;

/*
    주석
    연산되는 중괄호 안쪽에서는  일반 자시주석으로 활용가능하나
    JSX 안쪽에서는 주석도 중괄호로 감싸줘야 됨

    부모 컴포넌트에서 자식컴포넌트로 정보값을 전달할대 props를 활용
    부모에서 자식으로 데이터를 전달가능
    자식요소에서 props라는 객체로 해당 값을 전달 받음
*/
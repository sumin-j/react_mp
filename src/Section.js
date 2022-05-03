function Section(){
    const arr=['Bizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespoers'];

/*
- jsx문법 안쪽에서 반복처리할때는 map을 이용
- jsx문법 안쪽에서 연산처리가 필요한 부분은 중괄호로 감싸줌
- map에 의해서 반복생성되느 요소에는 무조건 key값 설정
*/    


    return(
        <section className='wrap'>
            {arr.map((data,idx)=>{
                return <article key={idx}>{data}</article>
            })}
        </section>
    )
}

export default Section;
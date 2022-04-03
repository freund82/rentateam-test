import styled from 'styled-components'
import AddItem from './AddItem';
import MakeOder from './MakeOder';

const ChickenSection=styled.section`
    grid-area:chicken;
    background: #F7F6F5;
`;

const ChickenTitle=styled.h1`
    font-family: 'Barlow Condensed', sans-serif;
    font-size:3.2rem;
    font-style: normal;
    font-weight: 400;
    margin-top:4rem;
    margin-left:9.6rem;
`;

const ChickenCards=styled.div`
    width:100%;
    max-width:124.8rem;
    display:flex;
    gap:3rem;
    flex-wrap:wrap;
    margin:0 auto;
    margin-top:3.2rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size:2.4rem;
    font-style: normal;
    font-weight: 400;
`;

const ChickenImage=styled.img`
    width:100%;
    max-width:20.8rem;
`;

const ChickenCard=styled.div`
    position:relative;
    z-index:100;
    width:28.8rem;
    height:36rem;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    padding-top:3.5rem;
    align-items:center;
    border-radius:0.8rem;
    &:hover{
        background:#fff;
        ${ChickenImage}{
            max-width:22rem;
        }
    }
`;

const ChickenPrice=styled.p`
    font-size:3.2rem;
    font-style: regular;
    font-weight: 400;
    color:#E4002B;
`;

const New=styled.span`
    position:absolute;
    z-index:1000;
    top:8%;
    left:14%;
    width:4.8rem;
    height:4.8rem;
    background:#E4002B;
    color:#fff;
    font-family: 'Cabin Condensed', sans-serif;
    font-style: normal;
    font-weight:700;
    font-size:1.5rem;
    border-radius:50%;
    padding-top:1.7rem;
    padding-bottom:1.3rem;
`;

const Hit=styled.span`
    position:absolute;
    z-index:1000;
    top:8%;
    left:14%;
    width:4.8rem;
    height:4.8rem;
    background:#000;
    color:#fff;
    font-family: 'Cabin Condensed', sans-serif;
    font-style: normal;
    font-weight:700;
    font-size:1.5rem;
    text-align:center;
    border-radius:50%;
    padding-top:1.7rem;
    padding-bottom:1.3rem;
`;


function Chicken(){

    const chickenItem=[
        {id:1, src:"../assets/images/Chicken/Stripes.png", name:"3 Стрипса", price:100, new:false, hit:true},
        {id:2, src:"../assets/images/Chicken/Stripes.png", name:"3 Стрипса", price:150, new:false, hit:true},
        {id:3, src:"../assets/images/Chicken/Stripes.png", name:"3 Стрипса", price:250, new:false, hit:false},
        {id:4, src:"../assets/images/Chicken/Stripes.png", name:"3 Стрипса", price:220, new:false, hit:false},
        ]

    return(
        <ChickenSection>
            <ChickenTitle>Курица</ChickenTitle>
            <ChickenCards>{chickenItem.map((item, index)=><div key={index}><ChickenCard className="card">{(item.new===true)?<New>Новое</New>:null}{(item.hit===true)?<Hit>Хит</Hit>:null}<MakeOder></MakeOder><AddItem></AddItem><ChickenImage src={item.src} alt=""></ChickenImage><p>{item.name}</p><ChickenPrice>{item.price}&#8381;</ChickenPrice></ChickenCard></div>)}</ChickenCards>
        </ChickenSection>
    )
}

export default Chicken
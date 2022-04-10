import styled from 'styled-components'
import AddItem from './AddItem';
import MakeOder from './MakeOder';

const TwistersSection=styled.section`
    grid-area:twisters;
`;

const TwistersTitle=styled.h1`
    margin-top:4.1rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size:3.2rem;
`;

const TwistersCards=styled.div`
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

const TwisterImage=styled.img`
    width:100%;
    max-width:10.9rem;
`;

const TwisterCard=styled.div`
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
        ${TwisterImage}{
            max-width:12rem;
        }
    }
`;

const TwistersPrice=styled.p`
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


function Twisters(){

    const twistersItem=[
        {id:1, src:"../assets/images/Twisters/Twister.png", name:"Твистер", price:100, new:false, hit:true},
        {id:2, src:"../assets/images/Twisters/Twister.png", name:"Твистер", price:150, new:false, hit:true},
        {id:3, src:"../assets/images/Twisters/Twister.png", name:"Твистер", price:250, new:false, hit:true},
        {id:4, src:"../assets/images/Twisters/Twister.png", name:"Боксмастер", price:220, new:true, hit:false},
        ]

    return(
        <TwistersSection>
            <TwistersTitle>Твистеры</TwistersTitle>
            <TwistersCards>{twistersItem.map((item, index)=><div key={index}><TwisterCard className="card" key={index}><MakeOder name={item.name} price={item.price}></MakeOder><AddItem></AddItem>{(item.new===true)?<New>Новое</New>:null}{(item.hit===true)?<Hit>Хит</Hit>:null}<TwisterImage src={item.src} alt=""></TwisterImage><p>{item.name}</p><TwistersPrice>{item.price}&#8381;</TwistersPrice></TwisterCard></div>)}</TwistersCards>
        </TwistersSection>
    )
}

export default Twisters
import styled from 'styled-components'


const BurgersSection=styled.section`
grid-area:burgers;
background: #F7F6F5;
`;

const BurgersTitle=styled.h1`
    font-family: 'Barlow Condensed', sans-serif;
    font-size:3.2rem;
    font-style: normal;
    font-weight: 400;
    margin-top:4rem;
    margin-left:9.6rem;
`;

const BurgersCards=styled.div`
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

const BurgerImage=styled.img`
    width:100%;
    max-width:19.2rem;
`;

const BurgerCard=styled.div`
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
        ${BurgerImage}{
            max-width:21.6rem;
        }
    }
`;

const BurgerPrice=styled.p`
    font-size:3.2rem;
    font-style: regular;
    font-weight: 400;
    color:#E4002B;
`;

const New=styled.span`
    position:absolute;
    z-index:1000;
    top:8%;
    left:12%;
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
    left:12%;
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

function Burgers(){

    const burgerItem=[
        {id:1, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:100, new:true, hit:false},
        {id:2, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:150, new:false, hit:true},
        {id:3, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:250, new:false, hit:false},
        {id:4, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:220, new:false, hit:false},
        {id:5, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:230, new:false, hit:false},
        {id:6, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:190, new:false, hit:true},
        {id:7, src:"../assets/images/Burgers/burger.png", name:"Бургер", price:210, new:false, hit:false},
    ]
    

    return(
        <BurgersSection>
            <BurgersTitle>Бургеры</BurgersTitle>
            <BurgersCards>{burgerItem.map((item, index)=><div><BurgerCard key={index}>{(item.new===true)?<New>Новое</New>:null}{(item.hit===true)?<Hit>Хит</Hit>:null}<BurgerImage src={item.src} alt=""></BurgerImage><p>{item.name}</p><BurgerPrice>{item.price}&#8381;</BurgerPrice></BurgerCard></div>)}</BurgersCards>
        </BurgersSection>
    )
}

export default Burgers
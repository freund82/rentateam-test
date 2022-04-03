import styled from 'styled-components'

const DeliverySection=styled.section`
    grid-area:delivery;
    margin-top:14.2rem;
`;
const TitleBlock=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
`;

const Title=styled.h1`
font-family: 'Cabin Condensed', sans-serif;
font-size:6.4rem;
font-style: normal;
font-weight: 700;
@media(max-width:1200px){
    text-align:center;
}
`;

const ButtonsBlock=styled.div`
    width:29.2rem;
    height:4.8rem;
    @media(max-width:1200px){
        margin:2rem auto 0;
    }
`;

const ButtonDelivery=styled.button`
    width:14.6rem;
    height:4.8rem;
    background:#E4002B;
    border-radius:0.4rem;
    cursor:pointer;
    color:#fff;
    border:none;
    outline:none;
    font-family: 'Abel', sans-serif;
    font-feight:400;
    font-style: normal;
    font-size:1.6rem;
    letter-spacing:0.04rem;
    line-height:2.4rem;
    &:hover{
        background:#FA1F41;
    }
`;

const ButtonGetOder=styled.button`
    width:14.6rem;
    height:4.8rem;
    background:#F7F6F5;
    border-radius:0.4rem;
    cursor:pointer;
    color:#9D9D9D;
    border:none;
    outline:none;
    font-family: 'Abel', sans-serif;
    font-feight:400;
    font-style: normal;
    font-size:1.6rem;
    letter-spacing:0.04rem;
    line-height:2.4rem;
    &:hover{
        background:#9B9A99;
        color:#fff;
    }
`;


const DeliveryInfoBlock=styled.div`
    display:none;
    position:relative;
    z-index:100;
`;

const DeliveryInfo=styled.p`
    width:46.3rem;
    height:4.6rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Cabin Condensed', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: center;
    background:#000;
    color:#fff;
    border-radius:0.8rem;
`;

const Beak=styled.span`
    position:absolute;
    top:-20%;
    left:29%;
    z-index:1000;
    display:block;
    width: 0;
    height: 0;
    border-bottom: 1rem solid #000;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-radius:1rem;
`;
const Input=styled.input`
    width:21rem;
    height:4.2rem;
    background:#F7F6F5;
    color:#9D9D9D;
    outline:none;
    border:none;
    font-size:1.6rem;
    padding-left:1.6rem;
`;
const AddressBlock=styled.div`
margin-top:4.8rem;
font-family: 'Barlow Condensed', sans-serif;
font-size:3.2rem;
&:hover ${DeliveryInfoBlock}{
    display:block;
}
`;

function Delivery(){
    return(
        <DeliverySection>
            <TitleBlock>
            <Title>Доставка г. Москва</Title>
            <ButtonsBlock>
                <ButtonDelivery type="btn">Доставка</ButtonDelivery><ButtonGetOder type="btn">Самовывоз</ButtonGetOder>
            </ButtonsBlock>
            <AddressBlock>
            <span style={{verticalAlign:"bottom", marginRight:"1.2rem"}}>Улица</span><Input type="text" placeholder='Остоженка'></Input><span style={{verticalAlign:"bottom", marginLeft:"4.3rem", marginRight:"1.2rem"}}>Дом</span><Input type="text" placeholder='Остоженка'></Input>
                <DeliveryInfoBlock>
                    <DeliveryInfo>Нужно заполнить для оформления доставки</DeliveryInfo>
                    <Beak></Beak>
                </DeliveryInfoBlock>
            </AddressBlock>
            </TitleBlock>
        </DeliverySection>
    )
}

export default Delivery
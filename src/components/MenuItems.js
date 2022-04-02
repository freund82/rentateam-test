import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MenuSection=styled.div`
    grid-area:main;
`;

const Menu=styled.nav`
    position:relative;
    z-index:100;
    display:flex;
    justify-content:space-between;
    height:6.4rem;
    align-items:center;
`;

const MenuItem=styled(Link)`
    text-decoration:none;
    color:#9D9D9D;
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    font-weight:400;
    font-size:1.8rem;
    text-overflow:clip;
    overflow:hidden;
    &:hover{
        color:grey;
    }
    &:hover:after{
        content:"";
        display:block;
        width:6.7rem;
        height:0.2rem;
        background:#E4022B;
        margin:auto;
        position:absolute;
        Top:98.88%;
        z-index:1000;
    }
`;

function MenuItems(){
return(
    <MenuSection>
        <Menu>
            <MenuItem to="/">Бургеры</MenuItem>
            <MenuItem to="/">Твистеры</MenuItem>
            <MenuItem to="/">Курица</MenuItem>
            <MenuItem to="/">Баскеты</MenuItem>
            <MenuItem to="/">Снэки</MenuItem>
            <MenuItem to="/">Соусы</MenuItem>
            <MenuItem to="/">Напитки</MenuItem>
            <MenuItem to="/">Кофе и чай</MenuItem>
            <MenuItem to="/">Десерты</MenuItem>
            <MenuItem to="/">Хиты по 50</MenuItem>
            <MenuItem to="/">Хиты по 100</MenuItem>
        </Menu>
    </MenuSection>
)

}

export default MenuItems
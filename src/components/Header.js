import styled from 'styled-components'

const Header=styled.header`
  grid-area:header;
`;

const Logo=styled.div`
    width:7rem;
    height:1.7rem;
    display:flex;
    margin:auto;
    justify-content:space-between;
    margin-bottom:1.6rem;
`;

const HeaderInner=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const Cart=styled.span`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:8.2rem;
    height:3.6rem;
    margin-right:2.2rem;
    padding-left:1rem;
    padding-right:0.5rem;
    background:#E4002B;
    color:#fff;
    border-radius:1.8rem;
    font-family: 'Abel', sans-serif;
    font-size:1.7rem;
    font-weight:400;
`;

function HeaderBlock(){
 return(
     <Header>
         <Logo>
             <span style={{width:"1.4rem", background:"#E4002B"}}></span>
             <span style={{width:"1.4rem", background:"#E4002B"}}></span>
             <span style={{width:"1.4rem", background:"#E4002B"}}></span>
         </Logo>
         <HeaderInner>
             <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V2H0V0ZM0 12H16V14H0V12ZM10 6H0V8H10V6Z" fill="black"/>
               </svg>
             </span>
             <Cart>
                 <span>326</span><span>&#8381;</span>
                 <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.56205L7.76825 9.64018C7.41468 10.0645 6.78412 10.1218 6.35984 9.76822C5.93556 9.41466 5.87824 8.78409 6.2318 8.35982L11.2318 2.35982C11.6316 1.88006 12.3685 1.88006 12.7682 2.35982L17.7682 8.35982C18.1218 8.78409 18.0645 9.41466 17.6402 9.76822C17.2159 10.1218 16.5854 10.0645 16.2318 9.64018L12 4.56205Z" fill="#F7F6F5"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.28077 9C2.6302 9 2.15284 9.61139 2.31062 10.2425L4.43189 18.7276C4.76577 20.0631 5.96572 21 7.34232 21H16.6577C18.0343 21 19.2342 20.0631 19.5681 18.7276L21.6894 10.2425C21.8471 9.61139 21.3698 9 20.7192 9H3.28077ZM12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13C13 12.4477 12.5523 12 12 12ZM6.25761 13.361C6.11467 12.8276 6.43125 12.2792 6.96471 12.1363C7.49818 11.9934 8.04652 12.3099 8.18946 12.8434L9.22473 16.7071C9.36768 17.2406 9.05109 17.7889 8.51763 17.9319C7.98416 18.0748 7.43582 17.7582 7.29288 17.2247L6.25761 13.361ZM17.0353 12.1363C16.5018 11.9934 15.9535 12.3099 15.8105 12.8434L14.7752 16.7071C14.6323 17.2406 14.9489 17.7889 15.4824 17.9319C16.0158 18.0748 16.5642 17.7582 16.7071 17.2247L17.7424 13.361C17.8853 12.8276 17.5687 12.2792 17.0353 12.1363Z" fill="white"/>
                    </svg>
                 </span>
             </Cart>
         </HeaderInner>
     </Header>
 )
}

export default HeaderBlock
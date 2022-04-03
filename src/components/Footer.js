import styled from 'styled-components'
import {Link} from 'react-router-dom'


const FooterSection=styled.footer`
    position:relative;
    z-index:100;
    grid-area:footer;
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    font-weight: 400;
`;

const FooterLogo=styled.div`
    width:16rem;
    height:7.177rem;
    display:flex;
    margin:auto;
    justify-content:space-between;
`;
const FooterInfo=styled.div`
    margin-top:8.123rem;
    margin-bottom:12.427rem;
    display:flex;
    justify-content:space-between;
`;

const FooterInfoTitle=styled.div`
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 5rem;
`;

const FooterInfoLogo=styled.div`
    width:100%;
    margin-top:2rem;
    max-width:22.7rem;
    height:22.7rem;
    border-radius:50%;
    background:#C4C4C4;
`;

const FooterLink=styled(Link)`
font-family: 'Barlow Condensed', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 2.9rem;
text-decoration:none;
color:#000;
`;

const FooterSocial=styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 auto;
    width:19.2rem;
    height:2.392rem;
`;

const Apps=styled.div`
    display:flex;
    justify-content:space-between;
    position:absolute;
    bottom:10%;
    right:-4%;
    z-index:1000;
    width:21.7rem;
    height:3.19rem;
`;

function Footer(){
    return(
        <FooterSection>
            <FooterLogo>
                <span style={{width:"3.2rem", background:"#E4002B"}}></span>
                <span style={{width:"3.2rem", background:"#E4002B"}}></span>
                <span style={{width:"3.2rem", background:"#E4002B"}}></span>
            </FooterLogo>
            <FooterInfo>
                <div>
                    <FooterInfoTitle>Раздел 1</FooterInfoTitle>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                </div>
                <div>
                    <FooterInfoTitle>Раздел 1</FooterInfoTitle>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                </div>
                    <FooterInfoLogo></FooterInfoLogo>
                <div>
                    <FooterInfoTitle>Раздел 1</FooterInfoTitle>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                </div>
                <div>
                    <FooterInfoTitle>Раздел 1</FooterInfoTitle>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                    <p><FooterLink to="/">Подраздел</FooterLink></p>
                </div>
            </FooterInfo>
            <FooterSocial>
                <Link to="/"><img src="../assets/images/social/vk.png" alt=""></img></Link>
                <Link to="/"><img src="../assets/images/social/facebook.png" alt=""></img></Link>
                <Link to="/"><img src="../assets/images/social/twitter.png" alt=""></img></Link>
                <Link to="/"><img src="../assets/images/social/facebook.png" alt=""></img></Link>
            </FooterSocial>
                <Apps>
                <Link to="/"><img src="../assets/images/social/google.png" alt=""></img></Link>
                <Link to="/"><img src="../assets/images/social/appstore.png" alt=""></img></Link>
                </Apps>
        </FooterSection>
    )
}

export default Footer
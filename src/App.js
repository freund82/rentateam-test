import HeaderBlock from "./components/Header";
import Delivery from "./components/Delivery";
import MenuItems from "./components/MenuItems";
import {BrowserRouter as Router} from 'react-router-dom'
import Burgers from "./components/Burgers";
import Twisters from "./components/Twisters";
import Chicken from "./components/Chicken";
import Footer from "./components/Footer";




function App() {
  return (
   <div className="container">
     <Router>
     <HeaderBlock></HeaderBlock>
     <Delivery></Delivery>
     <MenuItems></MenuItems>
     <Burgers></Burgers>
     <Twisters></Twisters>
     <Chicken></Chicken>
     <Footer></Footer>
     </Router>
   </div>
  );
}

export default App;

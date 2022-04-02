import HeaderBlock from "./components/Header";
import Delivery from "./components/Delivery";
import MenuItems from "./components/MenuItems";
import {BrowserRouter as Router} from 'react-router-dom'
import Burgers from "./components/Burgers";




function App() {
  return (
   <div className="container">
     <Router>
     <HeaderBlock></HeaderBlock>
     <Delivery></Delivery>
     <MenuItems></MenuItems>
     <Burgers></Burgers>
     </Router>
   </div>
  );
}

export default App;

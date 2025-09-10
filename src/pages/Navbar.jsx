import'../styles/Navigationbar.css'
import CourseList from "../CourseList";
import toggle_light from "../assets/toggle_light.png";
import toggle_dark from "../assets/toggle_dark.png";
import logo from "../assets/logo.png";
import img1 from "../assets/img11.jpg";
import img2 from "../assets/img12.jpg";
import img4 from "../assets/img14.jpg";
import parachute from "../assets/parachute.jpg";
import { cardsData, PlaceData } from './Cards.jsx';
import { Row, Col, Card , Button, Container,InputGroup,FormControl} from "react-bootstrap";
import '../styles/Cards.css'
import Home from'../pages/Home.jsx'





function Navbar({theme,setTheme}) {
  
  const toggle_mode = ()=>{
  theme === 'light' ? setTheme('dark'):setTheme('light')
}
  return (
      
      <div>
          
          <div id='navbar1' className="navbar1 position-fixed">
                <img src={logo} alt="" className="logo" />
                
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/destination">Destination</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/destinationdetails">Destination Details  </a></li>
                    <li><a className="dropdown-item" href="#">Elements </a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blogs
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Blog </a></li>
                    <li><a className="dropdown-item" href="#">Single Blog </a></li>
                  
                  </ul>
                </li>
                <li><a href="#">Contacts</a></li>
                </ul>
            <form className="search">
              <input
                id="search"
                type="text"
                placeholder="Search....."
            
              />
              <button
                
                type="button"
    
              >
                
              </button>
            </form>
            <img onClick = {()=>{toggle_mode()}}src={theme === 'light' ? toggle_light:toggle_dark} alt="" className="toggle_icon" />
          </div>
          
    </div>
  );
}

export default Navbar;



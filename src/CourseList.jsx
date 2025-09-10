import './navbar.css'
import Course from "./Course";
import HTML from "./assets/coat .jpg";
import CSS from "./assets/shose.jpg";
import JS from "./assets/shirt.jpg";
import watch from "./assets/watch.jpg";
import { useEffect, useState } from "react";
import toggle_light from "./assets/toggle_light.png";
import toggle_dark from "./assets/toggle_dark.png";
import logo_dark from "./assets/logo_light.png";
import logo_light from "./assets/logo_dark.png";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img4 from "./assets/img4.jpg";
import Casual1 from "./assets/Casual oufit-1.jpg";
import Casual2 from "./assets/Casual oufit-2.jpg";
import Casual3 from "./assets/Casual oufit-3.jpg";
import Casual4 from "./assets/Casual oufit-4.jpg";
import Casual5 from "./assets/Casual oufit-5.jpg";
import Casual6 from "./assets/Casual oufit-6.jpg";
import Casual7 from "./assets/Casual oufit-7.jpg";
import Casual8 from "./assets/Casual oufit-8.jpg";
import Casual9 from "./assets/Casual oufit-9.jpg";
import Casual10 from "./assets/Casual oufit-10.jpg";
import Formal1 from "./assets/Formal outfit-1.jpg";
import Formal2 from "./assets/Formal outfit-2.jpg";
import Formal3 from "./assets/Formal outfit-3.jpg";
import Formal4 from "./assets/Formal outfit-4.jpg";
import coat1 from "./assets/Long overcoat-1.jpg";
import coat2 from "./assets/Long overcoat-2.jpg";
import coat3 from "./assets/Long overcoat-3.jpg";
import coat4 from "./assets/Long overcoat-4.jpg";
import coat5 from "./assets/Long overcoat-5.jpg";
import coat6 from "./assets/Long overcoat-6.jpg";
import Tshirt1 from "./assets/T-shirt-1.jpg";
import Tshirt2 from "./assets/T-shirt-2.jpg";
import Tshirt3 from "./assets/T-shirt-3.jpg";
import Tshirt4 from "./assets/T-shirt-4.jpg";
import Tshirt5 from "./assets/T-shirt-5.jpg";
import Tshirt6 from "./assets/T-shirt-6.jpg";
import Tshirt7 from "./assets/T-shirt-7.jpg";
import Tshirt8 from "./assets/T-shirt-8.jpg";
import Tshirt9 from "./assets/T-shirt-9.jpg";
import Tshirt10 from "./assets/T-shirt-10.jpg";
import Tshirt11 from "./assets/T-shirt-11.jpg";
import Tshirt12 from "./assets/T-shirt-12.jpg";
import Tshirt13 from "./assets/T-shirt-13.jpg";
import Login from "./pages/Login";
import { Link } from 'react-router-dom';





function CourseList({theme,setTheme}) {

const toggle_mode = ()=>{
  theme === 'light' ? setTheme('dark'):setTheme('light')
}

  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const course =([
    {
      name: "Black coat",
      price: 29999,
      image: HTML,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:1
    },
    {
      name: "White Shirt",
      price: 4999,
      image: JS,
      rating: `rating :${4.8}`,
      producttype: "shirt",
      id:2
    },
    {
      name: "Watch",
      price: 8999,
      image: watch,
      rating: `rating :${4.9}`,
      producttype: "watch",
      id:3
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual1,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:4
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual2,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:5
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual3,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:6
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual4,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:7
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual5,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:8
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual6,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:9
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual7,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:10
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual8,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:11
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual9,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:12
    },
    {
      name: "Watch",
      price: 8999,
      image: Casual10,
      rating: `rating :${4.9}`,
      producttype: "casuals",
      id:13
    },
    {
      name: "Watch",
      price: 8999,
      image: Formal1,
      rating: `rating :${4.9}`,
      producttype: "formals",
      id:14
    },
    {
      name: "Watch",
      price: 8999,
      image: Formal2,
      rating: `rating :${4.9}`,
      producttype: "formals",
      id:15
    },
    {
      name: "Watch",
      price: 8999,
      image: Formal3,
      rating: `rating :${4.9}`,
      producttype: "formals",
      id:16
    },
    {
      name: "Watch",
      price: 8999,
      image: Formal4,
      rating: `rating :${4.9}`,
      producttype: "formals",
      id:17
    },
    {
      name: "Black coat",
      price: 29999,
      image: coat1,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:18
    },
    {
      name: "Black coat",
      price: 29999,
      image: coat2,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:19
    },
    {
      name: "Black coat",
      price: 29999,
      image: coat3,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:20
    },
    {
      name: "Black coat",
      price: 29999,
      image: coat4,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:21
    },
    {
      name: "Black coat",
      price: 29999,
      image: coat5,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:22
    },
    {
      name: "Black coat",
      price: 29999,
      image: coat6,
      rating: `rating :${4.6}`,
      producttype: "Black coat",
      id:23,
    },
    

  ]);

  course.sort((x, y) => x.rating - y.rating);

  useEffect(() => {
    setFilteredItems(course);
  }, []);
  

  // const filters = course.filter((course)=> course.price<=98999)
  const courseslist =() => (
    <>
<Course setAllProduct = {filteredItems}/>
</>
  )

  // const courseslist = filteredItems.map((items, index) => (
  //       <>
  //         <Course
  //           key={index}
  //           name={items.name}
  //           image={items.image}
  //           price={items.price}
  //           rating={items.rating}
  //         />
  //       </>
  //     ));

    console.log("courseslist", courseslist);

    const handleChange = (value) => {
      setSearch(value);
    };

    const handleClick = (search) => {
      console.log("search", search);
      const filterProduct = search
        ? course.filter((item) => item.producttype === search)
        : course;
      console.log("filterProduct", filterProduct);
      setFilteredItems(filterProduct);
    };
  return (
    <>
          <div id='navbar' className="navbar">
                <img src={theme === 'light' ? logo_light :logo_dark} alt="" className="logo" />
                <h2>OutfitX</h2>
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href={courseslist()}>For Mens </a></li>
                    <li><a class="dropdown-item" href="#">For womens </a></li>
                    <li><a class="dropdown-item" href="#">For Both</a></li>
                  </ul>
                </li>
                <li><a href="#">Contacts</a></li>
                <li><Link to="/login">Login</Link></li>
                </ul>
            <form className="search">
              <input
                id="search"
                type="text"
                placeholder="Search....."
                onChange={(e) => handleChange(e.target.value)}
              />
              <button
                type="button"
                onClick={() => handleClick(search)}
              > search
              </button>
            </form>
            <img onClick = {()=>{toggle_mode()}}src={theme === 'light' ? toggle_light:toggle_dark} alt="" className="toggle_icon" />
          </div>
          <center>
              <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} className="d-block  " alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={img2} className=" d-block   " alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={img4} className="d-block  " alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                  </button>
                  <div className="carousel-text">
                    <h1>Welcome</h1>
                    <p>Where Tradition Meets Today</p>
                </div> 
              </div>
          </center>
         
        {courseslist()}
        <br/>
        
     
      
    </>
  );
}

export default CourseList;
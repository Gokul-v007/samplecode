import img1 from "../assets/img11.jpg";
import img2 from "../assets/img12.jpg";
import img4 from "../assets/img14.jpg";
// import CourseList from "../CourseList";
import { FaStar ,FaPlay , FaTrain, FaHotel, FaGlobe,FaYoutube,FaPinterest,FaInstagram,FaTwitter,FaFacebook } from "react-icons/fa";

import { cardsData, PlaceData, recenttrips } from './Cards.jsx';
import { Row, Col, Card , Button, Container,InputGroup,FormControl ,Carousel} from "react-bootstrap";
import '../styles/Home.css'
import trip1 from "../assets/trip1.jpeg";
import trip2 from "../assets/trip2.jpeg";
import trip3 from "../assets/trip3.jpeg";
import Navbar from "./Navbar";
import { useState } from "react";


function Home(){
      
            return(
                <>
                <center>
              <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} className="d-block  py-3" alt="..."/>
                      <div className="carousel-text">
                          <h1>Australia</h1>
                          <p>Pixel Perfect Design With Awesome Content</p>
                          <Button id="explore" variant = "sucess" type="submit "   className=" px-4 py-2 my-5 justify-content-center ">Explore Now</Button>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img2} className=" d-block   py-3" alt="..."/>
                      <div className="carousel-text">
                          <h1>Switzerland</h1>
                          <p>Pixel Perfect Design With Awesome Content</p>
                          <Button id="explore" variant = "sucess" type="submit "   className=" px-4 py-3 my-5 justify-content-center ">Explore Now</Button>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img4} className="d-block  py-3" alt="..."/>
                      <div className="carousel-text">
                          <h1>Indonesia</h1>
                          <p>Pixel Perfect Design With Awesome Content</p>
                          <Button id="explore" variant = "sucess" type="submit "   className=" px-4 py-2 my-5 justify-content-center ">Explore Now</Button>
                      </div>
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
                   
              </div>
          </center>
        <div className='navbar2'>
                <h1>Where you want to go?</h1>
                <input type="text" placeholder='Where to go ?' className='search1'/>
                <input type="date" placeholder='date' className='search1'/>
                <button id='drop' className="nav-item dropdown py-2 px-5 text-end">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Travel Types
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Trave Types </a>
                    <a className="dropdown-item" href="#">Some Other Options </a>
                  </ul>
                </button>
                <Button id='Button' variant = "sucess" type="submit "   className=" px-4 py-2 ">search</Button>
        </div>
      <div className='para'>
        <h1>Popular Destination</h1>
        <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
      </div>
      <Container>
        <Col >
          <Row>
            {cardsData.map(pro=>(
              <Card   key={pro.id} 
              style={{
                  backgroundImage: `url(${pro.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "300px"
                }}
              className='Card  col-2 md-col-4 lg-col-3 sm-col-1'>
              <div 
                  style={{
                    color:"white",
                    position: "absolute",
                    top: 0, left: 0, right: 0, bottom: 0,
                  }} 
                />
              <div id='text'>
                  <Card.Title id='title'>
                    {pro.title}
                  </Card.Title>
                <Button id='btn3'>{pro.button}</Button>
              </div>
            </Card>
            ))}
          </Row>
      </Col>
                
    </Container>
    
      <div className='background'>
        <Container id='newsletter'>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={6} className="text-md-start text-center mb-3  mb-md-0" id='subscribe'>
            <h3 className="fw-bold text-light">Subscribe Our Newsletter</h3>
            <p className="text-light ">
              Subscribe newsletter to get offers and about new places to discover.
            </p>
          </Col>
          <Col md={6}>
            <InputGroup className="justify-content-md-end">
              <FormControl
                placeholder="Your mail"
                type="email"
                style={{ maxWidth: "300px" }}
              />
              <Button
                style={{
                  backgroundColor: "#ff4d4d",
                  border: "none",
                  padding: "10px 20px",
                  fontWeight: "600",
                }}>
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      </div>
      <div className='para'>
        <h1>Popular Places</h1>
        <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
      </div>
      <Container >
        <Col  >
          <Row>
            {PlaceData.map(place=>(
              <Card id="Card"  key={place.id}>
                <Card.Img src={place.image} alt=''/>
                <div id="fonttext">
                    <Card.Title>{place.title}</Card.Title>
                    <Card.Text>{place.text}</Card.Text>
                    <div className="d-flex align-items-center">
                        {[...Array(place.Rating)].map(( i) => (
                            <FaStar key={i} color="#f39c12" size={16} />
                        ))}
                        <span className="ms-2 text-muted">{place.Review}</span>
                    </div>
                </div>
                
                <Button id="buttonprice">{place.price}</Button>
            </Card>
             ))}
          </Row>
        </Col>
        <Button id='moreplace' variant = "sucess" type="submit "   className=" px-4 py-2 my-5 center ">More Places</Button>
      </Container> 
       <div className="video-section">
      <Container className="text-center">
        <h1 className="video-title">Enjoy Video</h1>
        <div className="play-button">
          <FaPlay />
        </div>
      </Container>
    </div>
    <Container>
      <Row>
        <Col className="stats">
        <FaTrain size={50} color="red" className="logo"/>
         <h4>Comfortable Journey</h4>
         <p>A wonderful serenity has taken to the possession of my entire soul.</p>
        </Col>
        <Col className="stats">
        <FaHotel size={50} color="red" className="logo" />
         <h4>Luxuries Hotel</h4>
         <p>A wonderful serenity has taken to the possession of my entire soul.</p>
        </Col >
        <Col className="stats">
        <FaGlobe size={50} color="red"  className="logo"/>
         <h4>Travel Guide</h4>
         <p>A wonderful serenity has taken to the possession of my entire soul.</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <h2 id="recenttrip">Recent Trips</h2>
        {/* <Col>
          <Row>
            {recenttrips.map(trip=>(
              <div   key={trip.id} 
              style={{
                  backgroundImage: `url(${trip.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "300px"
                }}
              className='Card justify-content-center mx-5 col-2 md-col-4 lg-col-3 sm-col-1'>
              <div 
                  style={{
                    color:"white",
                    position: "absolute",
                    top: 0, left: 0, right: 0, bottom: 0,
                  }} 
                />
                <p id="tripdate">{trip.date}</p>
                <h3 id="triptext">{trip.text}</h3>
            </div>
            
            ))}
            
          </Row>
        </Col> */}

        <Row>
          
            <Col >
            <img src={trip1} alt="" id="recenttrips" />
            <p id="trips">oct 12 2019</p>
            <h4 className="my-5" id="trips">Journey Are Best Measured In New Friends</h4>
            </Col>
            <Col>
              <img src={trip2} alt="" id="recenttrips" />
              <p id="trips">oct 12 2019</p>
              <h4 id="trips">Journey Are Best Measured In New Friends</h4>
            </Col>
            <Col>
              <img src={trip3} alt="" id="recenttrips" />
              <p id="trips">oct 12 2019</p>
              <h4 id="trips">Journey Are Best Measured In New Friends</h4>
            </Col>
         
          
        </Row>
            
    </Container>
    <footer id="footer" className="  text-light ">
      <Container >
        <Row>
          <Col md={4}  >
            <div className="d-flex align-items-center mb-3">
              <span className="me-2 fs-4">🧭</span>
              <h4 className="m-0">Travelo</h4>
            </div>
            <p>
              5th flora, 700/D kings road, green lane <br />
              New York-1782 <br />
              +10 367 826 2567 <br />
              contact@carpenter.com
            </p>
            <div className="d-flex gap-3">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
              <FaYoutube />
            </div>
          </Col>
          <Col md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>Pricing</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Popular Destination</h5>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>Indonesia</li>
                  <li>India</li>
                  <li>Italy</li>
                  <li>France</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>America</li>
                  <li>Switzerland</li>
                  <li>Canada</li>
                  <li>England</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <h5>Instagram</h5>
            <Row className="g-2">
              <Col xs={4}>
                <img src="https://picsum.photos/100/100?1" alt="insta1" className="img-fluid rounded" />
              </Col>
              <Col xs={4}>
                <img src="https://picsum.photos/100/100?2" alt="insta2" className="img-fluid rounded" />
              </Col>
              <Col xs={4}>
                <img src="https://picsum.photos/100/100?3" alt="insta3" className="img-fluid rounded" />
              </Col>
              <Col xs={4}>
                <img src="https://picsum.photos/100/100?4" alt="insta4" className="img-fluid rounded" />
              </Col>
              <Col xs={4}>
                <img src="https://picsum.photos/100/100?5" alt="insta5" className="img-fluid rounded" />
              </Col>
              <Col xs={4}>
                <img src="https://picsum.photos/100/100?6" alt="insta6" className="img-fluid rounded" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
    </>    
  )
}
export default Home;
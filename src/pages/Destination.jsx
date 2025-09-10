import React, { useState } from 'react';
import Navbar from './Navbar';
import "../styles/Destination.css";
import trip1 from "../assets/trip1.jpeg";
import trip2 from "../assets/trip2.jpeg";
import trip3 from "../assets/trip3.jpeg";
import { Col, Row, Button, Dropdown, InputGroup, Form, Card , Container} from 'react-bootstrap';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from "react-icons/fa";

function Destination() {
    const [country, setCountry] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(2000);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search initiated!');
    };

    const cardData = [
        { img: 'https://i.pinimg.com/736x/76/f8/fe/76f8fe2a52ad866f20643c9896247d67.jpg', title: 'Nature\'s Beauty', text: 'Peaceful moments by the lake.', time: '5 mins ago' },
        { img: 'https://i.pinimg.com/736x/80/5c/62/805c62ebdaff9acb39d1e964f78cc0d7.jpg', title: 'Urban Landscape', text: 'City lights at dusk.', time: '7 mins ago' },
        { img: 'https://i.pinimg.com/736x/8c/c9/3e/8cc93e00b0fc563fadf9343f5fc3d060.jpg', title: 'Mountain Trails', text: 'Exploring the serene mountains.', time: '3 mins ago' },
        { img: 'https://i.pinimg.com/1200x/2f/ff/33/2fff33ebc92b6c997d3b1cb1e83ae8d7.jpg', title: 'Forest Escape', text: 'A tranquil walk through the woods.', time: '10 mins ago' },
        { img: 'https://i.pinimg.com/736x/3a/26/a9/3a26a99ea24f7a261a178ad20b26c86b.jpg', title: 'Golden Sunset', text: 'Reflections of a beautiful evening.', time: '2 mins ago' },
        { img: 'https://i.pinimg.com/1200x/c7/cb/73/c7cb73c6f1cf3b859aef2226e4dec10a.jpg', title: 'Desert Vistas', text: 'The vastness of sandy landscapes.', time: '12 mins ago' },
    ];

    return (
        <div>
            <Navbar/>
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

            {/* Footer */}
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
        </div>
    );
}

export default Destination;

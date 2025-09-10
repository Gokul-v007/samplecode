import React from 'react';
import '../styles/About.css'
import { Col, Row,Button } from 'react-bootstrap'
import NavBar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../assets/img11.jpg";
import img2 from "../assets/img12.jpg";
import img4 from "../assets/img14.jpg";
// import Carousel from './Carousel';
// import AnimatedCounter from './Amine';
// import Car from './Car2'

function About() {
  const data = [
    { target: 378, text: "Tour has done successfully" },
    { target: 30, text: "Yearly tour arrange" },
    { target: 2263, text: "Happy Clients" }]

  return (
    <div>
      <NavBar />
      <div>
        <div className='overlay m-auto mb-5' >
          <div>
            {/* <Carousel /> */}
          <center>
              <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} className="d-block  py-3" alt="..."/>
                      <div className="carousel-text">
                          <h1>About</h1>
                          <p>Pixel Perfect Design With Awesome Content</p>
                          
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img2} className=" d-block   py-3" alt="..."/>
                      <div className="carousel-text">
                          <h1>About</h1>
                          <p>Pixel Perfect Design With Awesome Content</p>
                          
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img4} className="d-block  py-3" alt="..."/>
                      <div className="carousel-text">
                          <h1>About</h1>
                          <p>Pixel Perfect Design With Awesome Content</p>
                          
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
          </div>
          
        </div>
        <div className='pt-5' style={{ paddingLeft: '200px', }}>
          <h2 style={{ paddingBlockEnd: '30px' }} >Our    Story</h2>
          &nbsp;
          &nbsp;&nbsp;
          <h5 className='line-height-2' style={{ paddingLeft: '60px', fontFamily: "sans-serif", paddingRight: "536px", fontSize: '16px', fontWeight: '35px', color: 'GrayText', lineHeight: '30px' }}>
            Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help
            companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
          </h5>
          <h5 style={{ paddingLeft: '60px', fontFamily: "sans-serif", paddingRight: "536px", fontSize: '16px', fontWeight: '35px', color: 'GrayText', lineHeight: '30px' }}>
            Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help
            companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
          </h5>

        </div>
        <div className='pt-5' style={{ paddingLeft: '259px', paddingTop: '55px' }}>
          <image >
            <img src='https://preview.colorlib.com/theme/travelo/img/about/1.png' style={{ width: '350px' }} alt='shs'></img>
          </image>
          &nbsp;
          <image >
            <img style={{ paddingLeft: "100px", width: '600px' }} src='https://preview.colorlib.com/theme/travelo/img/about/2.png' alt='shs'></img>
          </image>
          <div className="d-flex justify-content-around col-10">
            {data.map((d, i) => (
              <div key={i} className="counter-wrapper ">
                {/* <AnimatedCounter target={d.target} /> */}
                <p className="counter-text">{d.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* <Car /> */}
    </div>
  )

}

export default About
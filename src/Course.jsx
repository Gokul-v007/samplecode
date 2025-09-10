

import PropTypes from 'prop-types'
import {useState } from 'react';

import { FaStar } from "react-icons/fa";

import { Row, Col, Container } from "react-bootstrap";
import './Course.css'



function Course(pro){
    const getProducts = pro.setAllProduct;

    console.log('pros', pro.setAllProduct)
    //let purchased = false;
   
        const [PurchasedId, setPurchasedId] = useState(null);
        const [discount , setDiscount] = useState({});
        const [orderplaced,setOrderPlaced] = useState({});
     function order(id) {
        setPurchasedId(id);
        
        }
      function offer(id, price) {
            setDiscount(prev => ({
            ...prev,
            [id]: (prev[id] || price) * 0.7, 
            }));
  }
      function placed(count) {
         setOrderPlaced(count);
      }

        return (
    <Container>
      <div className='H2'>
        <Row>
          {pro.setAllProduct.map((pro) => {
            
            const displayedPrice = discount[pro.id] !== undefined ? discount[pro.id] : pro.price;
            return (
              <Col key={pro.id}>
                <div className="card md-col-4 lg-col-6 sm-col-2 px-5 ">
                  <div className='image-container'>
                  <img src={pro.image} alt={pro.name}/></div>
                  <h3>{pro.name}</h3>
                  <p>Price: {pro.price}</p>
                  {[...Array(pro.Rating)].map(( i) => (
                    <FaStar key={i} color="#f39c12" size={16} />
                   ))}
                  <button className='btn-animate' onClick={() => order(pro.id)}>Order</button>
                  <p>
                    {PurchasedId === pro.id
                      ? `${pro.name} Order placed with Rupees ${pro.price}`
                      : "order"}
                  </p>
                  <button className='btn-animate' onClick={() => offer(pro.id, pro.price)}>Discount 30%</button>
                  <p>
                    {discount[pro.id] !== undefined
                      ? `Discounted! New price: ${displayedPrice}`
                      : ""}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}
    
Course.propTypes = {
  setAllProduct: PropTypes.array.isRequired,
}
export default Course;


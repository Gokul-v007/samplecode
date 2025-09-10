import { Row, Col, Card , Button, Container,InputGroup,FormControl} from "react-bootstrap";
import Destination from '../assets/destination.jpg'
import '../styles/destinationdetails.css'

function Destinationdetails (){
    return(
        <>
        <div id="mg"><img src={Destination}  alt="..."/></div>
        <div className="carousel-tet">
            <h1>Saintmartine Iceland</h1>
            <p>Pixel Perfect Design With Awesome Content</p>
        </div>
        {/* <Container>
        </Container> */}
        </>
    );
}
export default  Destinationdetails;
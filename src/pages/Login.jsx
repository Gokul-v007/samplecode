import React from "react";
import '../styles/login.css'
import { Card, Container, Form,Button,Row,Col } from "react-bootstrap";

function Login() {
    
  return (
    <>
    <center>
        <Container className="mt-4 ">
            <Card className=" shadow p-5" id="logincard">
                    <Card.Title className="mb-3 " id="formtitle" >Form in React-Bootstrap</Card.Title>
                    <Form>
                    <Form.Group controlId="formFirstName" className="mb-3" >
                        <Form.Label id="formtext">First Name*</Form.Label>
                        <Form.Control type="text" placeholder="First name" required />
                    </Form.Group>

                    <Form.Group controlId="formLastName" className="mb-3">
                        <Form.Label id="formtext">Last Name*</Form.Label>
                        <Form.Control type="text" placeholder="Last name" required />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label id="formtext">Email Id*</Form.Label>
                        <Form.Control type="email" placeholder="Email id" required />
                    </Form.Group>
                    <Form.Group controlId="formContacts" className="mb-3">
                        <Form.Label id="formtext">Contacts*</Form.Label>
                        <Form.Control type="tel" placeholder="Phone Number" required />
                    </Form.Group>
                    <Form.Group controlId="formGender" className="mb-3">
                    <Form.Label>Gender:</Form.Label>
                    <div>
                    <Form.Check
                        inline
                        type="radio"
                        label="Male"
                        name="gender"
                        id="genderMale"
                        className="mx-5"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Female"
                        name="gender"
                        id="genderFemale"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Other"
                        name="gender"
                        id="genderOther"
                    />
                    </div>
                    </Form.Group>
                    <Form.Group controlId="formHobbies" className="mb-3">
                        <Form.Label>Your Best Subjects*</Form.Label>
                        <div className="d-flex m-2">
                        <Form.Check className="mx-2" type="checkbox" label="English" id="English" />
                        <Form.Check className="mx-2" type="checkbox" label="Maths" id="Maths" />
                        <Form.Check className="mx-2" type="checkbox" label="Science" id="Science" />
                        <Form.Check className="mx-2" type="checkbox" label="physics" id="physics" />
                        </div>
                    </Form.Group>
                </Form>
                <Form.Group controlId="formUploadfile" className="mb-3">
                    <Form.Label id="formtext">Upload File*</Form.Label>
                    <Form.Control type="file" placeholder="Browse" required />
                </Form.Group>
                <Form.Group controlId="formurl" className="mb-3">
                    <Form.Label id="formtext">Enter URL*</Form.Label>
                    <Form.Control type="url" placeholder="Enter url" required />
                </Form.Group>
                <Form.Group controlId="formurl" className="mb-3">
                    <Form.Label id="formtext">Select your Choice*</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select Your Answer</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
                <Form.Group controlId="formAbout">
          <Form.Label>About</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="About your self" 
                />
                </Form.Group>
                 <Form.Group>
                <Form.Label>Submit OR Reset</Form.Label>
                <Row className="mt-2">
                    <Col xs="auto">
                        <Button className="text-white" variant="success" type="reset">
                        Reset
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button className="text-white" variant="success" type="submit">
                        Submit
                        </Button>
                    </Col>
                    </Row>
                </Form.Group>
            </Card>
            
            </Container>
    </center>
    </>
    
  );
}

export default Login;

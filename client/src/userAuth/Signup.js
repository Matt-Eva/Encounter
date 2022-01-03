import {Form, Container, Col, Row, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import paperBackground from '../assets/paperBackground.jpg'
import berserker from '../assets/berserker.jpg'

const formBackgroundStyle = {
    backgroundImage: `url(${paperBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const backgroundImageStyle = {
    backgroundImage: `url(${berserker})`
}

function Signup(){
   return(
       <Container className="mw-100">
           <Row>
               <Col sm={4} md={4} lg={4} style={formBackgroundStyle} className="vh-100">
                   <h1>D&D Encounter</h1>
                   <Form style={{"width": "23rem"}}>
                       <Form.Group>
                           <Form.Label>Username:</Form.Label>
                           <Form.Control type="text" placeholder="Enter your username here." />
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>Password:</Form.Label>
                           <Form.Control type="password" placeholder="Enter your password here." />
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>Confirm Password:</Form.Label>
                           <Form.Control type="password" placeholder="Confirm your password here." />
                       </Form.Group>
                       <Button variant="secondary" type="submit">Sign Up</Button>
                   </Form>
                   <Link to="/login">Already have an account? Login.</Link>
               </Col>
               <Col style={backgroundImageStyle}>
               </Col>
           </Row>
       </Container>
   );
}

export default Signup;
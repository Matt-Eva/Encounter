import {Form, Container, Col, Row, Button} from "react-bootstrap"
import {Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import paperBackground from '../assets/paperBackground.jpg'
import berserker from '../assets/berserker.jpg'
import { useContext, useState } from "react"
import { UserContext } from "../context/userState"

const formBackgroundStyle = {
    backgroundImage: `url(${paperBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: "50px"
}

const backgroundImageStyle = {
    backgroundImage: `url(${berserker})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

function Signup(){
    const {user, setUser } = useContext(UserContext)
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()
    const [form, setForm ] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
        dmName: ""
    })


    const displayErrors = errors?.map(error => <p>{error}</p>)

    function handleChange(e){
       setForm({
           ...form,
           [e.target.name]: e.target.value
       })
    }

    function handleSubmit(e, form){
        console.log(form.dmName)
        e.preventDefault()
        const userPost = {
            username: form.username,
            dm_name: form.dmName,
            password: form.password,
            password_confirmation: form.passwordConfirmation
        }
        console.log(userPost)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userPost)
        }
        fetch('/signup', configObj)
        .then((r) => {
            if (r.ok){
                r.json().then(data => {
                    setUser(data)
                    console.log(data)
                    navigate("/home")
                })
            } else{
                r.json().then(data => {
                    setErrors(data.errors)
                    console.log(data.errors)
                })
            }
        })
    }
   return(
       <Container className="mw-100">
           <Row>
               <Col sm={9} md={7} lg={5} xl={3} style={formBackgroundStyle} className="vh-100">
                   <h1>D&D: Encounter</h1>
                   <Form style={{"width": "23rem"}} onChange={handleChange} onSubmit={(e) => handleSubmit(e, form)}>
                       <Form.Group>
                           <Form.Label>Username:</Form.Label>
                           <Form.Control type="text" name="username" placeholder="Enter your username here." value={form.username}/>
                       </Form.Group>
                       <Form.Group>
                            <Form.Label>Dungeon Master Name:</Form.Label>
                            <Form.Control type="text" name="dmName" placeholder="Choose your DM name. Be creative!" value={form.dmName} />
                        </Form.Group>
                       <Form.Group>
                           <Form.Label>Password:</Form.Label>
                           <Form.Control type="password" name="password" placeholder="Enter your password here." value={form.password} />
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>Confirm Password:</Form.Label>
                           <Form.Control type="password" name="passwordConfirmation" placeholder="Confirm your password here." value={form.passwordConfirmation} />
                       </Form.Group>
                       <br/>
                       <Button variant="secondary" type="submit">Sign Up</Button>
                       <br />
                       <br />
                   </Form>
                   {errors ? displayErrors: null }
                   <Link style={{"color": "black"}} to="/login">Already have an account? Login.</Link>
               </Col>
               <Col style={backgroundImageStyle}>
               </Col>
           </Row>
       </Container>
   );
}

export default Signup;
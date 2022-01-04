 import {Form, Container, Col, Row, Button} from "react-bootstrap"
 import { Link, useNavigate} from 'react-router-dom'
 import 'bootstrap/dist/css/bootstrap.min.css'
 import paperBackground from '../assets/paperBackground.jpg'
 import berserker from '../assets/berserker.jpg'
 import { useContext, useState } from "react"
 import { UserContext } from "../context/userState"

 const formBackgroundStyle = {
     backgroundImage: `url(${paperBackground})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover'
 }

 const backgroundImageStyle = {
     backgroundImage: `url(${berserker})`
 }

function Login(){
    const { setUser } = useContext(UserContext)
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()
    const [form, setForm ] = useState({
        username: "",
        password: "",
    })

    const displayErrors = errors?.map(error => <p>{error}</p>)

    function handleChange(e){
       setForm({
           ...form,
           [e.target.name]: e.target.value
       })
    }

    function handleSubmit(e, form){
        e.preventDefault()
        const userPost = {
            username: form.username,
            password: form.password
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userPost)
        }
        fetch('/login', configObj)
        .then((r) => {
            if (r.ok){
                r.json().then(data => {
                    setUser(data)
                    navigate("/")
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
                <Col sm={4} md={4} lg={4} style={formBackgroundStyle} className="vh-100">
                    <h1>D&D Encounter</h1>
                    <Form style={{"width": "23rem"}} onChange={handleChange} onSubmit={(e) => handleSubmit(e, form)}>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter your username here." value={form.username} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter your password here." value={form.password}/>
                        </Form.Group>
                        <Button variant="secondary" type="submit">Login</Button>
                    </Form>
                    {errors ? displayErrors: null }
                    <Link to="/signup">New to Encounter? Click here to sign up!</Link>
                </Col>
                <Col style={backgroundImageStyle}>
                </Col>
            </Row>
        </Container>
    );
}

export default Login

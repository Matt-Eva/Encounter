import React, {useState} from 'react'
import {Form, Container, Col, Row, Button} from "react-bootstrap"

function ForgotPassword() {
    const [form, setForm ] = useState({
        email: ""
    })

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
     }

     function handleSubmit(e, form){
         e.preventDefault();
         const userPost = {
             email: form.email
         }
         const configObj = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(userPost)
         }
         fetch('/login', configObj)
         .then(r => {
             if(r.ok){}
         })
     }

  return (
    <Container fluid>
        <Row>
            <Col>
                <Form onChange={handleChange}>
                    <Form.Group>
                        <Form.Label>Enter Email:</Form.Label>
                        <Form.Control type='text' name='email' placeholder='Enter your email to recover password' value={Form.email}/>
                    </Form.Group>
                    <Button>Reset Password</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default ForgotPassword
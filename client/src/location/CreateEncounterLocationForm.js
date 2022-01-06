import { Form, Container } from "react-bootstrap"
import { useState } from "react";
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import { useNavigate } from "react-router-dom";

function CreateEncounterLocationForm(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: ""
    })

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, obj){
        e.preventDefault()

        const newEncLocation = {
            name: obj.name,
            image: obj.image,
            description: obj.description,
            enc_id: selectedEncounter.id
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEncLocation)
        }
        fetch("/newenclocation", configObj)
        .then(r => r.json())
        .then(data =>{
            console.log(data)
            navigate(`/encounter/${selectedEncounter.id}`)
        })
    }

    return(
    <Container>
         <Form onChange={handleChange} onSubmit={(e) => handleSubmit(e, form)}>
            <Form.Group>
                <Form.Label>Location Name:</Form.Label>
                <Form.Control type="text" name="name" value={form.name}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Location Image:</Form.Label>
                <Form.Control type="text" name="image" value={form.image}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Location Description:</Form.Label>
                <Form.Control as="textarea" name="description" value={form.description}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="submit"/>
            </Form.Group>
        </Form>
    </Container>
    )
}

export default CreateEncounterLocationForm;
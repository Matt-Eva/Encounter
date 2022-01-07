import { Form, Container } from "react-bootstrap"
import { useState, useContext, useEffect } from "react";
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import { useNavigate, useParams } from "react-router-dom";

function CreateEncounterMonsterForm(){
    const {selectedEncounter, setSelectedEncounter} = useContext(SelectedEncounterContext)
    const navigate = useNavigate()
    const enc = useParams()
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: ""
    })

    useEffect(() => {
        fetch(`/encs/${enc.id}`)
        .then(r => r.json())
        .then(data => setSelectedEncounter(data))
    }, [])

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, obj){
        e.preventDefault()

        const newEncMonster = {
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
            body: JSON.stringify(newEncMonster)
        }
        fetch("/newencmonster", configObj)
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
                <Form.Label>Monster Name:</Form.Label>
                <Form.Control type="text" name="name" value={form.name}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Monster Image:</Form.Label>
                <Form.Control type="text" name="image" value={form.image}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Monster Description:</Form.Label>
                <Form.Control as="textarea" name="description" value={form.description}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="submit"/>
            </Form.Group>
        </Form>
    </Container>
    )
}

export default CreateEncounterMonsterForm;

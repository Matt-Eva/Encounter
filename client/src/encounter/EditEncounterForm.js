import { Form } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { SelectedCampaignContext} from "../context/selectedCampaignState"


function EditEncounterForm({encounter}){
    const[form, setForm] = useState({
        name: encounter.name,
        description: encounter.description,
        image: encounter.image,
        notes: encounter.notes,
        status: encounter.status
    })
    const {selectedCampaign} = useContext(SelectedCampaignContext)
    const navigate = useNavigate()

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, obj){
        e.preventDefault()
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }
        
        fetch(`/encs/${encounter.id}`, configObj)
        .then(r =>r.json())
        .then(() =>{
            navigate(`/campaign/${selectedCampaign.id}`)
        })
    }

    return(
        <Form style={{"width": "23rem"}} onChange={handleChange} onSubmit={(e)=>handleSubmit(e, form)}>
                    <Form.Group>
                        <Form.Label>Encounter Title:</Form.Label>
                        <Form.Control type="text" name="name" value={form.name}  placeholder="Choose your encounter's title!" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" name="description" value={form.description} placeholder="A brief description of the encounter." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image:</Form.Label>
                        <Form.Control type="text" name="image" value={form.image} placeholder="Input image link." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control as="textarea" name="notes" value={form.notes}  placeholder="Any checks/things to note?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status:</Form.Label>
                        <Form.Control type="text" name="status" value={form.status} placeholder="Is this encounter active or in-active?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="submit" />
                    </Form.Group>
                </Form>
    )
}

export default EditEncounterForm;
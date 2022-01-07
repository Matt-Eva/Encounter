import { useState } from "react"
import {CampaignsContext} from "../context/campaignsState"
import {useContext} from "react";
import { Form } from "react-bootstrap"

function CreateCampaignForm(){
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const [form, setForm] = useState({
        name:"",
        description: "",
        image: "",
        status: "active"
    })

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
     }

     function handleSubmit(e, obj){
         e.preventDefault()
         const newC = {...obj}
         const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newC)
         }

         fetch("/campaigns", configObj)
         .then(r => r.json())
         .then(data =>{
             setCampaigns([...campaigns, data])
             setForm({
                name:"",
                description: "",
                image: "",
                status: "active"
            })
         })
     }

    return(
        <Form onChange={handleChange} onSubmit={(e) => handleSubmit(e, form)}>
            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" name="name" value={form.name} placeholder="Campaign Title"/> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Image:</Form.Label>
                <Form.Control type="text" name="image" value={form.image} placeholder="Campaign Image"/> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name="description" value={form.description} placeholder="Campaign Description"/> 
            </Form.Group>
            <Form.Group>
                <Form.Control type="submit"/>
            </Form.Group>
        </Form>
    );
}

export default CreateCampaignForm;
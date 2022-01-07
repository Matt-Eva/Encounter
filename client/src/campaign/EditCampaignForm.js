import { useState } from "react"
import {CampaignsContext} from "../context/campaignsState"
import {useContext} from "react";
import {Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"

function EditCampaignForm({campaign}){
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: campaign.name,
        description: campaign.description,
        image: campaign.image,
        status: campaign.status
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
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newC)
         }

         fetch(`/campaigns/${campaign.id}`, configObj)
         .then(r => r.json())
         .then(data =>{
             console.log(data)
             setCampaigns([...campaigns, data])
             setForm({
                name:"",
                description: "",
                image: "",
                status: "active"
            })
            navigate("/home")
         })
     }

    return(
        <Form onChange={handleChange} onSubmit={(e) => handleSubmit(e, form)} >
            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" name="name" value={form.name} placeholder="Campaign Title" style={{"fontSize": "20px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Image:</Form.Label>
                <Form.Control type="text" name="image" value={form.image} placeholder="Campaign Image URL" style={{"fontSize": "20px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name="description" value={form.description} placeholder="Campaign Description" style={{"fontSize": "20px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="submit"/>
            </Form.Group>
        </Form>
    );
}

export default EditCampaignForm;
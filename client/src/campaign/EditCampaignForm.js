import { useState, useContext, useEffect } from "react"
import {CampaignsContext} from "../context/campaignsState"
import {Form} from "react-bootstrap"
import {useNavigate, useParams} from "react-router-dom"

function EditCampaignForm({editCampaign, setEditCampaign}){
    const navigate = useNavigate()
    const campaign = useParams()
    const [form, setForm] = useState({
        name: editCampaign.name,
        description: editCampaign.description,
        image: editCampaign.image,
        status: editCampaign.status
    })

    useEffect(() => {
        fetch(`/campaigns/${campaign.id}`)
        .then(r => r.json())
        .then(data => {
     
            setForm({
                name: data.name,
                description: data.description,
                image: data.image,
                status: data.status
            })
            setEditCampaign(data)
        })
    }, [])

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

         fetch(`/campaigns/${editCampaign.id}`, configObj)
         .then(r => r.json())
         .then(data =>{
             console.log(data)
             setForm({
                name:"",
                description: "",
                image: "",
                status: "active"
            })
            navigate("/")
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
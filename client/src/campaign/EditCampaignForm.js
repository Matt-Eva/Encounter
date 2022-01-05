import { useState } from "react"
import {CampaignsContext} from "../context/campaignsState"
import {useContext} from "react";

function EditCampaignForm({campaign}){
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
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
         })
     }

    return(
        <form onChange={handleChange} onSubmit={(e) => handleSubmit(e, form)}>
            <input type="text" name="name" value={form.name} placeholder="Campaign Title"/>
            <input type="text" name="image" value={form.image} placeholder="Campaign Image URL"/>
            <textarea name="description" value={form.description} placeholder="Campaign Description"/>
            <button type="submit">Save</button>
        </form>
    );
}

export default EditCampaignForm;
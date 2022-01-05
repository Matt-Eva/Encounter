import { Link } from "react-router-dom"
import {CampaignsContext} from "../context/campaignsState";
import {EditCampaignContext} from "../context/editCampaignState"
import {useContext} from "react"

function CampaignCard({campaign}){
    const {description, image, name, status} = campaign
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setEditCampaign} = useContext(EditCampaignContext)


    function deleteCampaign(id){
        fetch(`campaigns/${id}`, {method: "DELETE"})
        .then(() =>{
            alert(`${campaign.name} deleted.`)
            const oneLess = campaigns.filter(campaign => campaign.id !== id)
            setCampaigns([...oneLess])
        })
    }

    function edit(){
        setEditCampaign(campaign)
    }

    return(
        <div>
            <h3>{name}</h3>
            <img src={image} style={{"maxWidth": "200px"}}/>
            <p style={{"maxWidth": "300px"}}>{description}</p>
            <p>Status: {status}</p>
            <button><Link to={`campaigns/${campaign.id}`}>View</Link></button>
            <button onClick={edit}><Link to="/editcampaign">Edit</Link></button>
            <button onClick={() =>deleteCampaign(campaign.id)}>Delete</button>
        </div>
    );
}

export default CampaignCard;
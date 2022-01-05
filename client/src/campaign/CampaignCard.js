import { Link } from "react-router-dom"
import {SelectedCampaignContext} from "../context/selectedCampaignState"
import {useContext} from 'react' 

function CampaignCard({campaign}){
    const {description, image, name, status} = campaign
    const {setSelectedCampaign} = useContext(SelectedCampaignContext)

    function handleViewCampaignOnClick(){
        setSelectedCampaign(campaign)
    }
    
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} style={{"maxWidth": "200px"}}/>
            <p style={{"maxWidth": "300px"}}>{description}</p>
            <p>Status: {status}</p>
            <button onClick={handleViewCampaignOnClick}><Link to={`campaigns/${campaign.id}`}>View</Link></button>
            <button>Edit</button>
            <button disabled>Delete</button>
        </div>
    );
}

export default CampaignCard;
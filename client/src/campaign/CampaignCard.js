import { Link } from "react-router-dom"
import {SelectedCampaignContext} from "../context/selectedCampaignState"
import {CampaignsContext} from "../context/campaignsState";
import {EditCampaignContext} from "../context/editCampaignState"
import {useContext} from "react"
import {Button, Card, Row, Col, Container} from "react-bootstrap";
import paperBackground from '../assets/paperBackground.jpg'


const cardStyle = {
    backgroundImage: `url(${paperBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "300px",
    height: "500px", 
    padding: "10px"
}

function CampaignCard({campaign}){
    const {description, image, name, status} = campaign
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setSelectedCampaign} = useContext(SelectedCampaignContext)
    const {setEditCampaign} = useContext(EditCampaignContext)



    function deleteCampaign(id){
        fetch(`campaigns/${id}`, {method: "DELETE"})
        .then(() =>{
            alert(`${campaign.name} deleted.`)
            const oneLess = campaigns.filter(campaign => campaign.id !== id)
            setCampaigns([...oneLess])
        })
    }

    return(
        <Card style={cardStyle}>
            <Card.Img src={image} alt="Image of the encounter" className="card-img-top img-fluid overflow-hidden border border-dark"/>
        <Card.Body>
        <Card.Title>
            {name}
        </Card.Title>
        <Card.Text>
            Status: {status}
        </Card.Text>
        <Row>
            <Col>
                <Link to={`/campaign/${campaign.id}`}><Button onClick={() => setSelectedCampaign(campaign)}>View</Button></Link>
                <Link to="/editcampaign"><Button onClick={() => setEditCampaign(campaign)}>Edit</Button></Link>
                <Button onClick={() => deleteCampaign(campaign.id)}>Delete</Button>
            </Col>
        </Row>
        </Card.Body>
    </Card>
    );
}

export default CampaignCard;


import { Link } from "react-router-dom"
import {SelectedCampaignContext} from "../context/selectedCampaignState"
import {CampaignsContext} from "../context/campaignsState";
import {EditCampaignContext} from "../context/editCampaignState"
import {useContext, useState} from "react"
import {Button, Card, Row, Col, Container} from "react-bootstrap";
import cardBackground from '../assets/cardBackground.jpg'


const cardStyle = {
    backgroundImage: `url(${cardBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "300px",
    height: "500px", 
    padding: "10px"
}

const buttonStyle = { 
    margin: "5px",
    cursor: "pointer",
    color: "black"
}

function CampaignCard({campaign}){
    const {image, name, status} = campaign
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setSelectedCampaign} = useContext(SelectedCampaignContext)
    const {setEditCampaign} = useContext(EditCampaignContext)



    function deleteCampaign(id){
        fetch(`/campaigns/${id}`, {method: "DELETE"})
        .then(() =>{
            alert(`${campaign.name} deleted.`)
            const oneLess = campaigns.filter(campaign => campaign.id !== id)
            setCampaigns([...oneLess])
        })
    }

    function toggleStatus(){
        let newStatus;
        if (campaign.status === "archived"){
            newStatus={
                status: "active"
            }
        } else if(campaign.status ==="active"){
            newStatus={
                status: "archived"
            }
        }
        const configObj ={
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newStatus)
        }
        fetch(`/campaigns/${campaign.id}`, configObj)
        .then(r => r.json())
        .then(data =>{
            const updCampaigns = campaigns.map(oldCampaign =>{
                if (oldCampaign.id === data.id){
                    return data
                } else{
                    return oldCampaign
                }
            })
            setCampaigns([...updCampaigns])
        })

    }

    return(
        <Card style={cardStyle} className="border border-dark">
            <Card.Img src={image} style={{"maxHeight": "300px"}} alt="Image of the encounter" className="card-img-top img-fluid border border-dark"/>
        <Card.Body>
        <Card.Title>
            {name}
        </Card.Title>
        <Card.Text>
            Status: {status}
        </Card.Text>
        <Row>
            <Col className="d-flex">
                <Link style={{"textDecoration": "none"}} to={`/campaign/${campaign.id}`}><h5 style={buttonStyle} variant="danger" onClick={() => setSelectedCampaign(campaign)}>View</h5></Link>
                <Link style={{"textDecoration": "none"}} to={`/editcampaign/${campaign.id}`}><h5 style={buttonStyle} variant="danger" onClick={() => setEditCampaign(campaign)}>Edit</h5></Link>
                {status === "active"? <h5 style={buttonStyle} variant="danger" onClick={toggleStatus}>Archive</h5> : <h5 style={buttonStyle} variant="danger" onClick={toggleStatus}>Reactivate</h5>}
                
            </Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <h5 style={buttonStyle}  onClick={() => deleteCampaign(campaign.id)}>Discard</h5>
            </Col>
        </Row>
        </Card.Body>
    </Card>
    );
}

export default CampaignCard;


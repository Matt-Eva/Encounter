import LogoutButton from "../userAuth/LogoutButton";
import CampaignDisplayContainer from "../campaign/CampaignDisplayContainer";
import Icon from "./Icon"
import {Link} from "react-router-dom";
import {Row, Container, Col, Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import {UserContext} from "../context/userState";
import {CampaignsContext} from "../context/campaignsState"
import {EditCampaignContext} from "../context/editCampaignState"
import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import parchmentBackground from '../assets/parchmentBackground.jpg'
import Filter from "./Filter";


const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'fixed',
    minHeight: "100%",
    position: "absolute"
}

function HomePage(){
    const {user} = useContext(UserContext)
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setEditCampaign} = useContext(EditCampaignContext)
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("all")

    useEffect(() =>{
        if (user.id !== 0) {
            fetch("/campaigns")
            .then(r => r.json())
            .then(data =>{
                setCampaigns(data)
            })
        }
    }, [user])

    function create(){
        setEditCampaign(null)
    }

    const campaignsToDisplay = campaigns.filter(campaign => campaign.name.toLowerCase().includes(search.toLowerCase())).filter((campaign) => {
        if(selected === "all"){
            return true
        } else {
            return selected === campaign.status
        }
    })

    if (user.id === 0){
        return(
          <h1>
            Loading...
          </h1>
        )
      }

    return(
        <Container style={backgroundImageStyle} className="mw-100">
            <Row className="justify-content-center" style={{"margin": "0px 10px 20px 10px"}}>
                <Col className="border-bottom border-dark" style={{"textAlign": "left"}}>
                    <Icon/>
                </Col>
                <Col className="text-center border-bottom border-dark" >
                   <h1>Encounter</h1>
                   <h5>Welcome, {user.dm_name}</h5>
                </Col>
                <Col  className="border-bottom border-dark" style={{"textAlign": "right"}}>
                    <LogoutButton/>
                </Col> 
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h1>My Campaigns</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <SearchBar search={search} setSearch={setSearch}/>
                </Col>
                <Col className="text-center">
                <Link to="/createcampaign"><Button variant="danger" onClick={create}>Create New Campaign</Button></Link>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                  <Filter selected={selected} setSelected={setSelected}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <CampaignDisplayContainer search={search} campaigns={campaignsToDisplay}/>
            </Row>
        </Container>
    );
}

export default HomePage;
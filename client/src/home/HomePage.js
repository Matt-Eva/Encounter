import LogoutButton from "../userAuth/LogoutButton";
import CampaignDisplayContainer from "../campaign/CampaignDisplayContainer";
import {Link} from "react-router-dom";
import {Row, Container, Col, Button} from "react-bootstrap";
import {UserContext} from "../context/userState";
import {CampaignsContext} from "../context/campaignsState"
import {EditCampaignContext} from "../context/editCampaignState"
import { useContext, useEffect } from "react";
import paperBackground from '../assets/paperBackground.jpg'


const backgroundImageStyle = {
    backgroundImage: `url(${paperBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

function HomePage(){
    const {user} = useContext(UserContext)
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setEditCampaign} = useContext(EditCampaignContext)

    useEffect(() =>{
        fetch("/campaigns")
        .then(r => r.json())
        .then(data =>{
            setCampaigns(data)
        })
    }, [])

    function create(){
        setEditCampaign(null)
    }

    if (user.id === 0){
        return(
          <h1>
            Loading...
          </h1>
        )
      }

    return(
        <Container style={backgroundImageStyle} className="mw-100 vh-100">
            <Row className="justify-content-center">
                <Col className="text-center">
                    Icon
                    Menu
                </Col>
                <Col className="text-center">
                   Encounter<br/>
                   Welcome {user.dm_name}
                </Col>
                <Col className="text-center">
                    <LogoutButton/>
                </Col> 
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                    My Campaigns
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                {/* This is just a placeholder - we'll eventually use our Searchbar component */}
                    <form>
                        <input type="text" placeholder="Search campaigns by title..."/>
                        <button type="submit">Search</button>
                    </form>
                </Col>
                <Col className="text-center">
                <Link to="/createcampaign"><Button variant="danger" className="text-dark" onClick={create}>Create New Campaign</Button></Link>
                </Col>
            </Row>
            <Row className="justify-content-center">
                Filter
            </Row>
            <Row className="justify-content-center">
                <CampaignDisplayContainer campaigns={campaigns}/>
            </Row>
        </Container>
    );
}

export default HomePage;
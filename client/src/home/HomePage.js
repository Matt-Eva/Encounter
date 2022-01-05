import LogoutButton from "../userAuth/LogoutButton";
import CampaignDisplayContainer from "../campaign/CampaignDisplayContainer";
import {Link} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";
import {UserContext} from "../context/userState";
import {CampaignsContext} from "../context/campaignsState"
import {EditCampaignContext} from "../context/editCampaignState"
import { useContext, useEffect } from "react";


function HomePage(){
    const {user} = useContext(UserContext)
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setEditCampaign} = useContext(EditCampaignContext)

    useEffect(() =>{
        fetch("/campaigns")
        .then(r => r.json())
        .then(data =>{
            console.log(data)
            setCampaigns(data)
        })
    }, [])

    function create(){
        setEditCampaign(null)
    }

    return(
        <Container>
            <Row>
                <Col>
                    Icon
                    Menu
                </Col>
                <Col>
                   Encounter<br/>
                   Welcome {user.dm_name}
                </Col>
                <Col>
                    <LogoutButton/>
                </Col> 
            </Row>
            <Row>
                <Col>
                    My Campaigns
                </Col>
            </Row>
            <Row>
                <Col>
                {/* This is just a placeholder - we'll eventually use our Searchbar component */}
                    <form>
                        <input type="text" placeholder="Search campaigns by title..."/>
                        <button type="submit">Search</button>
                    </form>
                </Col>
                <Col>
                    <button onClick={create}><Link to="/createcampaign">Create New Campaign</Link></button>
                </Col>
            </Row>
            <Row>
                Filter
            </Row>
            <Row>
                <CampaignDisplayContainer campaigns={campaigns}/>
            </Row>
        
        </Container>
    );
}

export default HomePage;
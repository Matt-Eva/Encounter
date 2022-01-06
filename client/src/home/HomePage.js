import LogoutButton from "../userAuth/LogoutButton";
import CampaignDisplayContainer from "../campaign/CampaignDisplayContainer";
import {Link} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";
import {UserContext} from "../context/userState";
import {CampaignsContext} from "../context/campaignsState"
import {EditCampaignContext} from "../context/editCampaignState"
import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";


function HomePage(){
    const {user} = useContext(UserContext)
    const {campaigns, setCampaigns} = useContext(CampaignsContext)
    const {setEditCampaign} = useContext(EditCampaignContext)
    const [search, setSearch] = useState("")

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

    const campaignsToDisplay = campaigns.filter(campaign => campaign.name.toLowerCase().includes(search.toLowerCase()))

    if (user.id === 0){
        return(
          <h1>
            Loading...
          </h1>
        )
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
                    <SearchBar search={search} setSearch={setSearch}/>
                </Col>
                <Col>
                    <button onClick={create}><Link to="/createcampaign">Create New Campaign</Link></button>
                </Col>
            </Row>
            <Row>
                Filter
            </Row>
            <Row>
                <CampaignDisplayContainer search={search} campaigns={campaignsToDisplay}/>
            </Row>
        </Container>
    );
}

export default HomePage;
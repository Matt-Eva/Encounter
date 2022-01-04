import LogoutButton from "../userAuth/LogoutButton";
import CampaignDisplayContainer from "../campaign/CampaignDisplayContainer";
import CampaignCard from "../campaign/CampaignCard";
import {Row, Container, Col} from "react-bootstrap";
import {UserContext} from "../context/userState";
import { useContext } from "react";


function HomePage(){
    const {user} = useContext(UserContext)
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
        
        </Container>
    );
}

export default HomePage;
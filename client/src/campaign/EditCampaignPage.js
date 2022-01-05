import LogoutButton from "../userAuth/LogoutButton";
import EditCampaignForm from "./EditCampaignForm"
import { EditCampaignContext } from "../context/editCampaignState";
import {useContext} from "react"
import {Link} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";

function EditCampaignPage(){
    const {editCampaign} = useContext(EditCampaignContext)

    return(
        <Container>
            <Row>
                <Col>
                <button><Link to="/">HomePage</Link></button>
                </Col>
                <Col>
                <h1>Edit {editCampaign.name}</h1>
                </Col>
                <Col>
                    <LogoutButton/>
                </Col>
            </Row>
            <Row>
                <EditCampaignForm campaign={editCampaign}/>
            </Row>
        </Container>
    );
}

export default EditCampaignPage;
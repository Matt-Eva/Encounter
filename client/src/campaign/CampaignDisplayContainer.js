import CampaignCard from "./CampaignCard"
import { Container, Stack } from "react-bootstrap"

function CampaignDisplayContainer({campaigns, search}){
    const campaignList = campaigns?.map(campaign => <CampaignCard key={campaign.id} campaign={campaign}/>)
    return(
        <Container>
            {/* <Row>
                {campaignList}  
            </Row> */}
            <Stack direction="horizontal" gap="3">
                {campaignList} 
            </Stack>
        </Container>
    );
}

export default CampaignDisplayContainer;
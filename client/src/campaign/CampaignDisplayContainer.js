import CampaignCard from "./CampaignCard"

function CampaignDisplayContainer({campaigns, search}){
    const campaignList = campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign}/>)
    return(
        <div>{campaignList}</div>
    );
}

export default CampaignDisplayContainer;
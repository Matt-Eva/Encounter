function CampaignCard({campaign}){
    const {description, image, name, status} = campaign
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} style={{"maxWidth": "200px"}}/>
            <p style={{"maxWidth": "300px"}}>{description}</p>
            <p>Status: {status}</p>
            <button>View</button>
            <button>Edit</button>
            <button disabled>Delete</button>
        </div>
    );
}

export default CampaignCard;
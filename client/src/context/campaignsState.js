import { createContext, useState} from "react";

const CampaignsContext = createContext();

function CampaignsProvider({children}){
    const [campaigns, setCampaigns] = useState([])

    return <CampaignsContext.Provider value={{campaigns, setCampaigns}}>{children}</CampaignsContext.Provider>
}

export {CampaignsContext, CampaignsProvider}
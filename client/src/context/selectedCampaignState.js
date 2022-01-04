import { createContext, useState} from "react";

const SelectedCampaignContext = createContext();

function SelectedCampaignProvider({children}){
    const [selectedCampaign, setSelectedCampaign] = useState({})

    return <SelectedCampaignContext.Provider value={{selectedCampaign, setSelectedCampaign}}>{children}</SelectedCampaignContext.Provider>
}

export {SelectedCampaignContext, SelectedCampaignProvider}
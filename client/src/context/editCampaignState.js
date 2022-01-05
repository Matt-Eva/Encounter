import { createContext, useState} from "react";

const EditCampaignContext = createContext();

function EditCampaignProvider({children}){
    const [editCampaign, setEditCampaign] = useState([])

    return <EditCampaignContext.Provider value={{editCampaign, setEditCampaign}}>{children}</EditCampaignContext.Provider>
}

export {EditCampaignContext, EditCampaignProvider}
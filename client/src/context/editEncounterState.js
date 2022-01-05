import { createContext, useState} from "react";

const EditEncounterContext = createContext();

function EditEncounterProvider({children}){
    const [editEncounter, setEditEncounter] = useState([])

    return <EditEncounterContext.Provider value={{editEncounter, setEditEncounter}}>{children}</EditEncounterContext.Provider>
}

export {EditEncounterContext, EditEncounterProvider}
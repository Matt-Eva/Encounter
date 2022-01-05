import { createContext, useState} from "react";

const SelectedEncounterContext = createContext();

function SelectedEncounterProvider({children}){
    const [selectedEncounter, setSelectedEncounter] = useState([])

    return <SelectedEncounterContext.Provider value={{selectedEncounter, setSelectedEncounter}}>{children}</SelectedEncounterContext.Provider>
}

export {SelectedEncounterContext, SelectedEncounterProvider}
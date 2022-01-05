import { createContext, useState} from "react";

const EncountersContext = createContext();

function EncountersProvider({children}){
    const [encounters, setEncounters] = useState([])

    return <EncountersContext.Provider value={{encounters, setEncounters}}>{children}</EncountersContext.Provider>
}

export {EncountersContext, EncountersProvider}
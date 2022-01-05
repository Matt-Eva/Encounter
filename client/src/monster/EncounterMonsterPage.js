import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import CreateEncounterMonsterForm from "./CreateEncounterMonsterForm";

function EncounterMonsterPage(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    return(
        <div>
            <Link to={`/encounter/${selectedEncounter.id}`}><Button>Back to {selectedEncounter.name}</Button></Link>
            <h1>Create a New Monster!</h1>
            <CreateEncounterMonsterForm/>
        </div>
    );
}

export default EncounterMonsterPage;
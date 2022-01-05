import CreateEncounterNpcForm from "./CreateEncounterNpcForm";
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"

function EncounterNpcPage(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    return(
        <div>
            <Link to={`/encounter/${selectedEncounter.id}`}><Button>Back to {selectedEncounter.name}</Button></Link>
            <h1>Create a New NPC!</h1>
            <CreateEncounterNpcForm/>
        </div>
    );
}

export default EncounterNpcPage;
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import CreateEncounterLocationForm from "./CreateEncounterLocationForm";

function EncounterLocationPage(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    return(
        <div>
            <Link to={`/encounter/${selectedEncounter.id}`}><Button>Back to {selectedEncounter.name}</Button></Link>
            <h1>Create a New Location!</h1>
            <CreateEncounterLocationForm/>
        </div>
    );
}

export default EncounterLocationPage;
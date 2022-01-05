import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import CreateEncounterItemForm from "./CreateEncounterItemForm";

function EncounterItemPage(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    return(
        <div>
            <Link to={`/encounter/${selectedEncounter.id}`}><Button>Back to {selectedEncounter.name}</Button></Link>
            <h1>Create a New Item!</h1>
            <CreateEncounterItemForm/>
        </div>
    );
}

export default EncounterItemPage;
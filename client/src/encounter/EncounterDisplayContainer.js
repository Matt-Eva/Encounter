import {Container, Stack} from "react-bootstrap"
import EncounterCard from "./EncounterCard"

function EncounterDisplayContainer({encounters, handleDelete}) {

    const encounterList = encounters?.map(enc => <EncounterCard key={enc.id} id={enc.id} handleDelete={handleDelete} encounter={enc} name={enc.name} image={enc.image} status={enc.status}/>)

    return (
        <Container>
            <Stack direction="horizontal" gap="3">
                {encounterList} 
            </Stack>
        </Container>
    )
}

export default EncounterDisplayContainer

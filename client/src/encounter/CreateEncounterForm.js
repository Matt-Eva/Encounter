import React from 'react'
import {Form} from "react-bootstrap"

function CreateEncounterForm({handleChange, handleSubmit, newEncounter}) {
    return (
        <Form onChange={handleChange} onSubmit={(e) => handleSubmit(e, newEncounter)}>
                    <Form.Group>
                        <Form.Label>Encounter Title:</Form.Label>
                        <Form.Control type="text" name="name" value={newEncounter.name} placeholder="Choose your encounter's title!" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" name="description" value={newEncounter.description} placeholder="A brief description of the encounter." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image:</Form.Label>
                        <Form.Control type="text" name="image" value={newEncounter.image} placeholder="Input image link." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control type="text" name="notes" value={newEncounter.notes} placeholder="Any checks/things to note?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="submit" />
                    </Form.Group>
                </Form>
    )
}

export default CreateEncounterForm

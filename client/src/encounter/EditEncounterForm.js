import { Form } from "react-bootstrap"


function EditEncounterForm(){
    return(
        <Form style={{"width": "23rem"}}>
                    <Form.Group>
                        <Form.Label>Encounter Title:</Form.Label>
                        <Form.Control type="text" name="name"  placeholder="Choose your encounter's title!" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" name="description" placeholder="A brief description of the encounter." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image:</Form.Label>
                        <Form.Control type="text" name="image"  placeholder="Input image link." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control as="textarea" name="notes"  placeholder="Any checks/things to note?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status:</Form.Label>
                        <Form.Control type="text" name="status"  placeholder="Is this encounter active or in-active?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="submit" />
                    </Form.Group>
                </Form>
    )
}

export default EditEncounterForm;
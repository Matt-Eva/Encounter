import {Form, Button} from "react-bootstrap"

function CreateEncounterPage(){
    return(
        <Form style={{"width": "23rem"}}>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter your username here." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Dungeon Master Name:</Form.Label>
                <Form.Control type="text" name="dmName" placeholder="Choose your DM name. Be creative!" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password here." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" name="passwordConfirmation" placeholder="Confirm your password here." />
            </Form.Group>
            <Button variant="secondary" type="submit">Sign Up</Button>
        </Form>
    );
}

export default CreateEncounterPage;
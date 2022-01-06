import {Form} from "react-bootstrap"

function SearchBar({search, setSearch}){
    return(
        <Form>
            <Form.Group>
                <Form.Label>Encounter Title:</Form.Label>
                <Form.Control type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
            </Form.Group>
        </Form>
    );
}

export default SearchBar;
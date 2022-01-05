import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

function HomePageButton(){
    return(
        <Link to="/home"><Button>HomePage</Button></Link>
    );
}
export default HomePageButton;
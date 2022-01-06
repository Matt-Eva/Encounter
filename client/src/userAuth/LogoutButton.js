import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button"

function LogoutButton(){
    const navigate = useNavigate()
    function logout(){
        fetch("/logout", {method: "DELETE"})
        .then(()=> navigate('/login'))
    }
    return(
        <Button variant="light" onClick={logout}>Logout</Button>
    );
}

export default LogoutButton
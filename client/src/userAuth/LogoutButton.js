import {useNavigate} from "react-router-dom";

function LogoutButton(){
    const navigate = useNavigate()
    function logout(){
        fetch("/logout", {method: "DELETE"})
        .then(()=> navigate('/login'))
    }
    return(
        <button onClick={logout}>Logout</button>
    );
}

export default LogoutButton
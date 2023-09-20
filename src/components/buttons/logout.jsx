import { useAuth } from "../auth";
import { Button } from "../../styles/styles";

function Logout() {

    const { setAuthenticated } = useAuth(); // Use o contexto de autenticação


    const handleLogout = () => {

        setAuthenticated(false); // Define o estado de autenticação como verdadeiro

    };
    return (
        <Button islogout="true" onClick={handleLogout}>Logout</Button>
    )

}

export default Logout
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

function Logout() {

    const { setAuthenticated } = useAuth(); // Use o contexto de autenticação
    const navigate = useNavigate(); // Obtenha a função de navegação


    const handleLogout = () => {

        setAuthenticated(false); // Define o estado de autenticação como verdadeiro

    };
    return (
        <button onClick={handleLogout}>Logout</button>
    )

}

export default Logout
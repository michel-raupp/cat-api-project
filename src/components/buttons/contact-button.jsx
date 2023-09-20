
import { Button } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

function ContactButton() {

    const navigate = useNavigate(); // Obtenha a função de navegação do react-router-dom

    const handleContact = () => {
        navigate('/contact'); // Redireciona para a página

    };
    return (
        <Button iscontact="true" onClick={handleContact}>Contact</Button>
    )

}

export default ContactButton

import { useNavigate } from "react-router";

function CancelPage() {
    const navigate = useNavigate();
    const navigateToRezervacija = () => {
        navigate("/sverezervacije");
    };
return(
    
    <div>
        Nažalost, došlo je do greške, pokušajte ponovo. Sredstva sa kartice nisu skinuta. 
        <button onClick={navigateToRezervacija}>Vrati me nazad na rezervacije!</button>
    </div>
)
}
export default CancelPage;


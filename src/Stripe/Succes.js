import { useContext } from "react";
import AuthContext from "../Store/auth-context";

function SucessPage() {
    const authCtx = useContext(AuthContext);
    var id = localStorage.getItem('rezervacija')
    console.log(id);
    fetch(`http://localhost:5000/api/rezervacija/${id}`, {
        method: "PUT"})
return(
    
    <div>
        USPELI STE BRAVO
        <button >Vrati me nazad na rezervacije!</button>
    </div>
)
}
export default SucessPage;


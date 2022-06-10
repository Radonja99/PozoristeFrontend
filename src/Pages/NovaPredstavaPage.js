import { Navigate } from "react-router";
import NovaPredstavaForm from "../Components/Predstave/NovaPredstavaForm";

function NovaPredstavaPage() {
    function addPredstavaHandler(NovaPredstavaData) {
        fetch('http://localhost:5000/api/predstava', 
        {
            method: 'POST',
            body: JSON.stringify(NovaPredstavaData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => {
            Navigate('/')
        })
    }
    return <section>
        <h1>Dodaj novu predstavu</h1>
            <NovaPredstavaForm
                onAddPredstava={addPredstavaHandler}/>
    </section>;
}
export default NovaPredstavaPage
import { useContext } from "react";
import { useNavigate } from "react-router";
import NovaPredstavaForm from "../Components/Predstave/NovaPredstavaForm";
import AuthContext from "../Store/auth-context";

function NovaPredstavaPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  var token = authCtx.token;
  function addPredstavaHandler(NovaPredstavaData) {
    fetch("https://localhost:5000/api/predstava", {
      method: "POST",
      body: JSON.stringify(NovaPredstavaData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      navigate("/");
    });
    
  }
  return (
    <section>
      <h1>Dodaj novu predstavu</h1>
      <NovaPredstavaForm onAddPredstava={addPredstavaHandler} />
    </section>
  );
}
export default NovaPredstavaPage;

import {useNavigate } from "react-router";
import NovaRezervacijaForm from "../Components/Rezervacije/NovaRezervacijaForm";
import AuthContext from "../Store/auth-context";
import { useContext } from "react";

function NovaRezervacijaPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  var token = authCtx.token;
  function addRezervacijaHandler(NovaRezervacijaData) {
    console.log(NovaRezervacijaData);
    fetch("http://localhost:5000/api/rezervacija", {
      method: "POST",
      body: JSON.stringify(NovaRezervacijaData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    }).then(() => {
      navigate("/sverezervacije");
    });
  }
  return (
    <section>
      <h1> Rezervisite karte</h1>
      <NovaRezervacijaForm onAddRezervacija={addRezervacijaHandler} />
    </section>
  );
}
export default NovaRezervacijaPage;

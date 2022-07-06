import {useNavigate } from "react-router";
import NovaRezervacijaForm from "../Components/Rezervacije/NovaRezervacijaForm";
import AuthContext from "../Store/auth-context";
import { useContext, useState } from "react";
import Alert from "@mui/material/Alert";

function NovaRezervacijaPage() {
  const [errMsg, setErrMsg] = useState("");
const [error, setError] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  var token = authCtx.token;
  function addRezervacijaHandler(NovaRezervacijaData) {
    console.log(NovaRezervacijaData);
    fetch("https://localhost:5000/api/rezervacija", {
      method: "POST",
      body: JSON.stringify(NovaRezervacijaData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
    .then((res) => {
      if (res.ok) {
        navigate("/");

        return res.text();


      } else {
         res.text().then((data) => {
          //error
          setError(true);
          setErrMsg(data);
          return;
        });
      }
    })
    ;
  }
  return (
    <section>
      {error && <Alert severity="error">{errMsg} !</Alert>}
      <h1> Rezervisite karte</h1>
      <NovaRezervacijaForm onAddRezervacija={addRezervacijaHandler} />
    </section>
  );
}
export default NovaRezervacijaPage;

import Card from "../UI/Card";
import React from "react";
import classes from "./PredstaveItem.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";


function deleteHandler(id) {
 
  var token = localStorage.getItem('token');
  fetch("https://localhost:5000/api/predstava/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res)
  window.location.reload()
}
function PredstavaItem(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateToRezervacija = () => {
    navigate('/sveizvedbe', { state: { id: props.predstavaID}});
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.div}>
          <h3>{props.nazivPredstave}</h3>
          <p>Zanr predstave: {props.zanr}</p>
          <p>Izvodi se: {props.brojIzvodjenja}. put</p>
          <p>Premijerno izvodjenje: {props.datumPremijere}</p>
          {authCtx.isLoggedIn ? <button onClick={navigateToRezervacija}>Vidi izvedbe</button>
          : <b> Ulogujte se da biste videli izvedbe ove predstave i rezervisali karte!!</b>}
          {authCtx.admin === "admin" && (
          <button onClick={() => deleteHandler(props.predstavaID)}>
            Obrisi predstavu
          </button>)}
        </div>
      </li>
    </Card>
  );
}
export default PredstavaItem;

import Card from "../UI/Card";
import React from "react";
import classes from "./PredstaveItem.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";


function deleteHandler(id) {
 
  fetch("http://localhost:5000/api/predstava/" + id, {
    method: "DELETE",
  }).then((res) => res)

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
          <p>{props.zanr}</p>
          <p>{props.brojIzvodjenja}</p>
          <p>{props.datumPremijere}</p>
          <p>{props.predstavaID}</p>
          {authCtx.isLoggedIn ? <button onClick={navigateToRezervacija}>Rezervisi karte</button>
          : <b> Ulogujte se da biste rezervisali karte!</b>}
          {authCtx.admin == "admin" && (
          <button onClick={() => deleteHandler(props.predstavaID)}>
            Obrisi predstavu
          </button>)}
        </div>
      </li>
    </Card>
  );
}
export default PredstavaItem;

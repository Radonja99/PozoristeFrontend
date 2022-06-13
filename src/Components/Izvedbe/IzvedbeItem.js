import Card from "../UI/Card";
import React, { useContext } from "react";
import classes from "./IzvedbaItem.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

 // const [sala, setSala] = useState([]);
 //   useEffect(() => {
 //     fetch("http://localhost:5000/api/sala")
 //       .then((response) => {
 //         return response.json();
 //       })
 //       .then((data) => {
 //         setSala(data);
 //       });
  //   }, []);


function IzvedbeItem(props) {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext)
  const navigateToRezervacija = () => {
    navigate('/novarezervacija', { state: { id: props.id}});
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.div}>
          <h3>{props.predstavaID}</h3>
          <p>Datum izvodjenja: {props.datumPrikazivanja}</p>
          <p>Gostujuca predstava: {props.gostujucaPredstava? 'Da' : 'Ne'}</p>
          <p>Broj slobodnih mesta:{props.brojSlobodnihMesta}</p>
          <p>Sala: {props.salaID}</p>
          <p>Pozoriste: {props.pozoriste}</p>
          <p>Cena: {props.cena}RSD</p>
          {authCtx.isLoggedIn ? <button onClick={navigateToRezervacija}>Rezervisi karte</button>
          : <b> Ulogujte se da biste rezervisali karte!</b>}
        </div>
      </li>
    </Card>
  );
}
export default IzvedbeItem;

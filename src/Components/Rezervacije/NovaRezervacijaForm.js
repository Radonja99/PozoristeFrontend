import { useRef } from "react";
import { Card } from "react-bootstrap";
import AuthContext from "../../Store/auth-context";
import classes from './NovaRezervacijaForm.module.css'
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function NovaRezervacijaForm(props) {
  const brojMestaRef = useRef();
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  function submitHandler(event) {
    event.preventDefault();

    var today = new Date()
   
    const enteredBrojMesta = brojMestaRef.current.value;
    const datumKreiranjaRezervacije = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate() + 'T' + today.getHours() +':00:00';
    const datumIstekaRezervacije = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate() + 'T' + today.getHours() +':00:00';
    const placeno = false;
    const id = location.state.id;
    const NovaRezervacijaData = {
        datumKreiranjaRezervacije: datumKreiranjaRezervacije,
        placeno: placeno,
        datumIstekaRezervacije: datumIstekaRezervacije,
        brojMesta: enteredBrojMesta,
        korisnikID: authCtx.id,
        izvedbaID: id
    };
    props.onAddRezervacija(NovaRezervacijaData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Broj mesta?</label>
          
          <input type="text" required id="brojMesta" ref={brojMestaRef} />
        </div>
        
        <div className={classes.action}>
          <button onClick={submitHandler}>Rezerviši</button>
        </div>
        <div className={classes.action}>
          <button>Poništi</button>
        </div>
      </form>
    </Card>
  );
}

export default NovaRezervacijaForm;
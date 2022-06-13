import Card from "../UI/Card";
import { useRef } from "react";
import classes from "./NovaPredstavaForm.module.css";
import addPredstavaHandler from "../../Pages/NovaPredstavaPage";

function NovaPredstavaForm(props) {
  const nazivInputRef = useRef();
  const zanrInputRef = useRef();
  const premijeraInputRef = useRef();
  const brojIzvodjenjaInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredNaziv = nazivInputRef.current.value;
    const enteredZanr = zanrInputRef.current.value;
    const enteredPremijera = premijeraInputRef.current.value;
    const enteredBroj = brojIzvodjenjaInputRef.current.value;

    const NovaPredstavaData = {
      nazivPredstave: enteredNaziv,
      zanr: enteredZanr,
      brojIzvodjenja: enteredBroj,
      datumPremijere: enteredPremijera,
    };

    console.log(NovaPredstavaData);
    props.onAddPredstava(NovaPredstavaData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Naziv predstave</label>
          <input type="text" required id="naziv" ref={nazivInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Zanr</label>
          <select type="text" required id="zanr" ref={zanrInputRef}>
            <option value="Drama">Drama</option>
            <option value="Opera">Opera</option>
            <option value="Balet">Balet</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">BrojIzvodjenja</label>
          <input
            type="number"
            required
            id="Broj izvodjenja"
            ref={brojIzvodjenjaInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Premijera</label>
          <input
            type="date"
            required
            id="datum premijere"
            ref={premijeraInputRef}
          />
        </div>
        <div className={classes.action}>
          <button onClick={submitHandler}>Dodaj predstavu</button>
        </div>
      </form>
    </Card>
  );
}

export default NovaPredstavaForm;

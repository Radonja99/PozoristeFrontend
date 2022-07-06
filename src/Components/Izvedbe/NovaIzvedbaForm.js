import Card from "../UI/Card";
import { useRef } from "react";
import classes from "./NovaIzvedbaForm.module.css";
import { useState, useEffect } from "react";

function NovaIzvedbaForm(props) {
  const datumRef = useRef();
  const gostRef = useRef();
  const cenaRef = useRef();
  const predstavaIDRef = useRef();
  const salaIDRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const entereddatumPrikazivanja = datumRef.current.value;
    const enteredgostujucaPredstava = true;
    const enteredcena = cenaRef.current.value;
    const enteredPredstava = predstavaIDRef.current.value;
    const enteredSala = salaIDRef.current.value;

    const NovaIzvedbaData = {
      datumPrikazivanja: entereddatumPrikazivanja,
      gostujucaPredstava: enteredgostujucaPredstava,
      cena: enteredcena,
      salaID: enteredSala,
      predstavaID: enteredPredstava,
    };
    props.onAddIzvedba(NovaIzvedbaData);
  }

  const [svePredstaveNiz, setSvePredstaveNiz] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/predstava")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSvePredstaveNiz(data);
      });
  }, []);

  const [sveSaleNiz, setSveSaleNiz] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5000/api/sala")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSveSaleNiz(data);
      });
  }, []);

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">datumPrikazivanja</label>
          <input type="date" required id="datum" ref={datumRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">gostujucaPredstava</label>
          <select type="boolean" required id="gost" ref={gostRef}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Cena</label>
          <input type="number" required id="cena" ref={cenaRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Predstava</label>
          <select ref={predstavaIDRef} required id="nazivpredstave">
            {svePredstaveNiz.map((item) => (
              <option value={item.predstavaID}> {item.nazivPredstave} </option>
            ))}
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="title">Sala</label>
          <select ref={salaIDRef} required id="nazivsale">
            {sveSaleNiz.map((item) => (
              <option value={item.salaID}> {item.nazivSale} </option>
            ))}
          </select>
        </div>
        <div className={classes.action}>
          <button onClick={submitHandler}>Dodaj izvedbu</button>
        </div>
      </form>
    </Card>
  );
}

export default NovaIzvedbaForm;

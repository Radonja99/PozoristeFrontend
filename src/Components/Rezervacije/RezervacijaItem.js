import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LA8D8ADqdpBkuR8VUxdqWPIoHUPsH3SygC1Vq6AVp4ScFyxHCbzctw23ZHWHEJTZW0au3oBY2DyypH8vqKJgm6j00xOEoA0RJ"
);

function deleteHandler(id) {
  const token = localStorage.getItem("token");
  fetch("http://localhost:5000/api/rezervacija/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res);
  window.location.reload();
}

function callCheckout() {
  fetch("http://localhost:5000/api/stripe", {
    method: "POST",
  });
}

function sacuvajRez(rez) {
  localStorage.setItem("rezervacija", rez);
}

function RezervacijaItem(props) {
  return (
    <Card>
      <li>
        <div>
          <p>Rezervacija je kreirana: {props.datumKreiranjaRezervacije}</p>
          <p>{props.datumIstekaRezervacije}</p>
          <p>{"Cena rezervacije je" + props.ukupnaCenaRezervacije}</p>
          <p>
            Rezervaciju je kreirao: {props.korisnikID} za predstavu{" "}
            {props.izvedbaID}
          </p>
          <p>{props.placeno}</p>
          <p>{props.brojMesta}</p>
          <button onClick={() => deleteHandler(props.rezervacijaID)}>
            {localStorage.getItem("admin") != "korisnik"
              ? "Obrisi rezervaciju"
              : "Otkazi rezervaciju"}
          </button>

          {localStorage.getItem("admin") == "korisnik" && (
            <form action="http://localhost:5000/api/stripe" method="POST">
              {localStorage.setItem("rezervacija", props.rezervacijaID)}
              <input
                type="hidden"
                name="ukupnaCenaRezervacija"
                value={props.ukupnaCenaRezervacije}
              />
              <button
                onClick={() => sacuvajRez(props.rezervacijaID)}
                type="submit"
              >
                Plati
              </button>
            </form>
          )}
        </div>
      </li>
    </Card>
  );
}

export default RezervacijaItem;

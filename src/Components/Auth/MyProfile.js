import { useContext, useRef } from "react";
import AuthContext from "../../Store/auth-context";

function MyProfile() {
  const newPasswordInputRef = useRef();
  const newTelefonInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const submitHandler = (event) => {
    event.preventDefault();

    const id = authCtx.id;
    const enteredNewPassword = newPasswordInputRef.current.value;
    const enteredNewTelefon = newTelefonInputRef.current.value;
    let NovKorisnikData;
    console.log(id);
    fetch(`http://localhost:5000/api/korisnik/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("data");

        NovKorisnikData = {
          imeKorisnika: data.imeKorisnika,
          prezimeKorisnika: data.prezimeKorisnika,
          korisnikID: data.korisnikID,
          telefon: enteredNewTelefon,
          korisnickoIme: data.korisnickoIme,
          brojRezervacija: data.brojRezervacija,
          role: data.role,
          lozinkaKorisnika: enteredNewPassword,
        }
          fetch("http://localhost:5000/api/korisnik", {
      method: "PUT",
      body: JSON.stringify(NovKorisnikData),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
      })}

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="new-password">Nova lozinka</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div>
        <label htmlFor="new-telefon">Novi broj telefona</label>
        <input type="text" id="new-telefon" ref={newTelefonInputRef} />
      </div>
      <div>
        <button>Update profile</button>
      </div>
    </form>
  );
}
export default MyProfile;

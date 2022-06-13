import { useState, useEffect, useContext } from "react";
import RezervacijaList from "../Components/Rezervacije/RezervacijaList";
import AuthContext from "../Store/auth-context";

function SveRezervacijePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sveRezervacijeNiz, setSveRezervacijeNiz] = useState([]);

  const authCtx = useContext(AuthContext)
  const token = authCtx.token;

  var URL = '';

  if (authCtx.admin=="admin")
  {
    URL = "http://localhost:5000/api/rezervacija"
  }
  else if (authCtx.admin=="korisnik"){
    URL = `http://localhost:5000/api/rezervacija/korisnik/${authCtx.id}`
  }

  
  useEffect(() => {
    setIsLoading(true);
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    const rezervacije =[];
    for (const key in data) {
        const rezervacija = {
            id:key,
            ...data[key]
            
        };
        rezervacije.push(rezervacija);
    }
      setIsLoading(false);
      setSveRezervacijeNiz(data);
    });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>Sve rezervacije</h1>
      <RezervacijaList rezervacije={sveRezervacijeNiz}> </RezervacijaList>
    </section>
  );
}
export default SveRezervacijePage;

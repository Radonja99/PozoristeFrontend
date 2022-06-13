import { useState, useEffect } from "react";
import IzvedbeList from "../Components/Izvedbe/IzvedbeList"
import { useLocation } from "react-router-dom";

function SveIzvedbePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sveIzvedbeNiz, setSveIzvedbeNiz] = useState([]);
  const location = useLocation();
  var id = null;
  
  id = location?.state?.id;

  console.log(id);
  var URL;

  if (id == null)
  {
    URL = "http://localhost:5000/api/izvedba"
  }
  else {
    URL = `http://localhost:5000/api/izvedba/predstava/${id}`
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    const izvedbe =[];
    for (const key in data) {
        const izvedba = {
            id:key,
            ...data[key]
        };
        izvedbe.push(izvedba);
    }
      setIsLoading(false);
      setSveIzvedbeNiz(izvedbe);
    });
  }, []);
  const sortirajUzbrdoHandler = () => {
  const sortiraneIzvedbeUzbrdo = [].concat(sveIzvedbeNiz)
    .sort((a,b) => a.cena > b.cena ? 1: -1)
    setSveIzvedbeNiz(sortiraneIzvedbeUzbrdo);
  }
  const sortirajNizbrdoHandler = () => {
    const sortiraneIzvedbeNizbrdo = [].concat(sveIzvedbeNiz)
    .sort((a,b) => a.cena > b.cena ? -1 : 1)
    setSveIzvedbeNiz(sortiraneIzvedbeNizbrdo);
  }
  
    // nizbrdo
    // function sortDescend() {
    // const sortiraneIzvedbeNizbrdo = [].concat(izvedbe)
    // .sort((a,b) => a.cena > b.cena ? -1 : 1)
    // return sortiraneIzvedbeNizbrdo;
    // }

    const sortirajSlobodnaMestaUzbrdoHandler = () => {
      const sortiraneIzvedbeUzbrdo = [].concat(sveIzvedbeNiz)
        .sort((a,b) => a.brojSlobodnihMesta > b.brojSlobodnihMesta ? 1: -1)
        setSveIzvedbeNiz(sortiraneIzvedbeUzbrdo);
      }
      const sortirajSlobodnaMestaNizbrdoHandler = () => {
        const sortiraneIzvedbeNizbrdo = [].concat(sveIzvedbeNiz)
        .sort((a,b) => a.brojSlobodnihMesta > b.brojSlobodnihMesta ? -1 : 1)
        setSveIzvedbeNiz(sortiraneIzvedbeNizbrdo);
      }


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>Sve izvedbe</h1>
      <button onClick={sortirajUzbrdoHandler}> Sortiraj po ceni rastuce</button>
      <button onClick={sortirajNizbrdoHandler}> Sortiraj po ceni opadajuce</button>
      <button onClick={sortirajSlobodnaMestaNizbrdoHandler}> Sortiraj po slobodnim mestima opadajuce</button>
      <button onClick={sortirajSlobodnaMestaUzbrdoHandler}> Sortiraj po slobodnim mestima rastuce</button>
      <IzvedbeList izvedbe={sveIzvedbeNiz}> </IzvedbeList>
    </section>
  );
}
export default SveIzvedbePage;

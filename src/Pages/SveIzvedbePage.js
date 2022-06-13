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
      <IzvedbeList izvedbe={sveIzvedbeNiz}> </IzvedbeList>
    </section>
  );
}
export default SveIzvedbePage;

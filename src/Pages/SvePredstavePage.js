import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import PredstaveList from "../Components/Predstave/PredstaveList";
import AuthContext from "../Store/auth-context";

function SvePredstavePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [svePredstaveNiz, setSvePredstaveNiz] = useState([]);

  const location = useLocation();

  
  
  
  useEffect(() => {
    var zanr = location?.state?.zanr;
    setIsLoading(true);
    if (zanr == null)
  {
    URL = "http://localhost:5000/api/predstava"
  }
  else {
    URL = `http://localhost:5000/api/predstava?zanr=${zanr}`
  }
    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    const predstave =[];
    for (const key in data) {
        const predstava = {
            id:key,
            ...data[key]
            
        };
        predstave.push(predstava);
       
    }
      setIsLoading(false);
      setSvePredstaveNiz(data);
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
      <h1>Sve predstave</h1>
      <PredstaveList predstave={svePredstaveNiz}> </PredstaveList>
    </section>
  );
}
export default SvePredstavePage;

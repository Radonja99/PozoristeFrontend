import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PredstaveList from "../Components/Predstave/PredstaveList";
import { useNavigate } from "react-router-dom";

function SvePredstavePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [svePredstaveNiz, setSvePredstaveNiz] = useState([]);
  const Navigate = useNavigate();

  const location = useLocation();

  const navigateToSvePredstaveOpera = () => {
    Navigate('/svepredstave', { state: { zanr: 'opera'}});
    window.location.reload()
  }
  const navigateToSvePredstaveDrama = () => {
    Navigate('/svepredstave', { state: { zanr: 'drama'}});
    window.location.reload()
  }
  const navigateToSvePredstaveBalet = () => {
    Navigate('/svepredstave', { state: { zanr: 'balet'}});
    window.location.reload()
  }
  const navigateSve = () => {
    Navigate('/svepredstave');
    window.location.reload()
  }
  
  
  useEffect(() => {
    var zanr = location?.state?.zanr;
    setIsLoading(true);
    if (zanr == null)
  {
    URL = "https://localhost:5000/api/predstava"
  }
  else {
    URL = `https://localhost:5000/api/predstava?zanr=${zanr}`
  }
    fetch(URL)
    .then((response) => {
      let pomocna = response.json();
      return pomocna;
    })
    .then((data) => {
    const predstave =[];
    for (const key in data) {
        const predstava = {
            id:key,
            ...data[key]
            
        };
        predstave?.push(predstava);
       
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
      <div>
        <button onClick={navigateToSvePredstaveBalet}>Balet</button>
        <button onClick={navigateToSvePredstaveOpera}>Opera</button>
        <button onClick={navigateToSvePredstaveDrama}>Drama</button>
        <button onClick={navigateSve}>Sve predstave</button>
      </div>
      <PredstaveList predstave={svePredstaveNiz}> </PredstaveList>
    </section>
  );
}
export default SvePredstavePage;

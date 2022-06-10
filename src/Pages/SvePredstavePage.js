import { useState, useEffect } from "react";
import PredstaveList from "../Components/Predstave/PredstaveList";

function SvePredstavePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [svePredstaveNiz, setSvePredstaveNiz] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/api/predstava")
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

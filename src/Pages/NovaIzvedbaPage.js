import { Navigate, useNavigate } from "react-router";
import NovaIzvedbaForm from "../Components/Izvedbe/NovaIzvedbaForm";

function NovaIzvedbaPage() {
  const navigate = useNavigate();
  function addIzvedbaHandler(NovaIzvedbaData) {
    fetch("http://localhost:5000/api/izvedba", {
      method: "POST",
      body: JSON.stringify(NovaIzvedbaData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Dodaj novu izvedbu</h1>
      <NovaIzvedbaForm onAddIzvedba={addIzvedbaHandler} />
    </section>
  );
}
export default NovaIzvedbaPage;

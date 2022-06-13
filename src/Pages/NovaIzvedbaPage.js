import { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import NovaIzvedbaForm from "../Components/Izvedbe/NovaIzvedbaForm";
import AuthContext from "../Store/auth-context";

function NovaIzvedbaPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  function addIzvedbaHandler(NovaIzvedbaData) {
    fetch("http://localhost:5000/api/izvedba", {
      method: "POST",
      body: JSON.stringify(NovaIzvedbaData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

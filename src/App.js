import { Navigate, Route, Routes } from "react-router";
import SvePredstavePage from "./Pages/SvePredstavePage";
import NovaPredstavaPage from "./Pages/NovaPredstavaPage";
import Layout from "./Components/Layout/Layout";
import AuthPage from "./Pages/AuthPage";
import SignupPage from "./Pages/SignupPage";
import NovaIzvedbaPage from "./Pages/NovaIzvedbaPage"
import SveIzvedbePage from "./Pages/SveIzvedbePage"
import SveRezervacijePage from "./Pages/SveRezervacijePage"
import NovaRezervacijaPage from "./Pages/NovaRezervacijaPage";
import StripeCheckout from "./Stripe/StripeCheckout";
import SucessPage from "./Stripe/Succes";
import UserProfile from "./Components/Auth/UserProfile";
import CancelPage from "./Stripe/Cancel";
import { useContext } from "react";
import AuthContext from "./Store/auth-context";

function App() {

  const authCtx = useContext(AuthContext)

  
  return (
    <Layout>
      <Routes>
       {authCtx.isLoggedIn && <Route path="/novapredstava" element={<NovaPredstavaPage />} />}
        <Route path="/svepredstave" element={<SvePredstavePage />} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path ="/novaizvedba" element={<NovaIzvedbaPage/>} />
        <Route path="/sveIzvedbe" element={<SveIzvedbePage/>} />
        <Route path="/sveRezervacije" element={<SveRezervacijePage/>} />
        <Route path="/novarezervacija" element={<NovaRezervacijaPage/>} />
        <Route path="/" element={<SvePredstavePage/>} />
        <Route path="/checkout" element={<StripeCheckout/>} />
        <Route path="/success" element={<SucessPage/>} />
        <Route path="/myprofile" element={<UserProfile/>} />
        <Route path="/cancel" element={<CancelPage/>} />
        <Route path='*' element={<Navigate to="/svepredstave"/>} />
        </Routes>
    </Layout>
  );
}

export default App;
import { Route, Routes } from "react-router";
import SvePredstavePage from "./Pages/SvePredstavePage";
import NovaPredstavaPage from "./Pages/NovaPredstavaPage";
import Layout from "./Components/Layout/Layout";
import AuthPage from "./Pages/AuthPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/nova" element={<NovaPredstavaPage />} />
        <Route path="/" element={<SvePredstavePage />} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;

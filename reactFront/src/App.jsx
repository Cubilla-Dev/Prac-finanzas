import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './containers/forms/Login'
import Register from './containers/forms/Register'
import Home from './containers/Home'
import { VerifyUser } from "./containers/VerifyUser";
//import VerifyUser from "./containers/VerifyUser";

//const Verify = VerifyUser(Home)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<VerifyUser><Home/></VerifyUser>}/>  {/* Protege la ruta Home */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

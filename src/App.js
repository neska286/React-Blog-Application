import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import paths from "./constants/paths";
import { Context } from "./context/Context";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings.jsx";
import Singlepost from "./pages/singlepost/Singlepost";
import Write from "./pages/write/Write";




function App() {
  const { user } = useContext(Context);
  return (
    <Router>
   <Navbar/>
   <Routes>
   <Route path={paths.home} element={<Home/>} />
   <Route path={paths.register} element={user ? <Home/> : <Register/>} />
   <Route path={paths.login} element={user?  <Home/> :<Login/>} />
   <Route path={paths.write} element={user? <Write/>:<Register/>} />
   <Route path={paths.settings} element={user?<Settings/>:<Register/>} />
   <Route path={paths.postDetails} element={<Singlepost/>} />
   </Routes>
    </Router>
  );
}

export default App;

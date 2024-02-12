import Home from "./pages/home/Home.js";
import TopBar from "./components/topbar/TopBar.js";
import Single from "./pages/single/Single.js";
import WRITE from "./pages/write/Write.js";
import Settings from "./pages/settings/Settings.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <WRITE /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

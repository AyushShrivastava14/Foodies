import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
// import Cart from "../pages/Cart";
// import Feedback from "../pages/Feedback";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
// import Logout from "../pages/Logout";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/NotFound";
import UserApp from "./Apps/UserApp";

function App() {
  const { authinfo } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {authinfo === null ? (<>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/user/*" element={<NotFound />}></Route>
            {/* <Route path="/feedback" element={<NotFound />}></Route>
            <Route path="/logout" element={<NotFound />}></Route> */}
          </>)
        : (<>
          {/* <Route path="/cart" element={<Cart />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/logout" element={<Logout />}></Route> */}
          <Route path="/user/*" element={<UserApp />} />
          {/* <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/canteen/*" element={<CanteenApp />} /> */}
        </>)}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

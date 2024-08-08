import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Feedback from "../../pages/Feedback";
import Logout from "../../pages/Logout";
import UserNavbar from "../../UsersTypes/User/UserNavbar";
import UserMenu from "../../UsersTypes/User/UserMenu";


function UserApp() {
  return (
    <>
        <UserNavbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<UserMenu />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/logout" element={<Logout />}></Route>          
        </Routes>
    </>
  );
}

export default UserApp;

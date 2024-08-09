import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/NotFound";
import UserApp from "./Apps/UserApp";
import ViewApp from "./Apps/ViewApp";

function App() {
  const { authinfo } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {authinfo === null ? (<>
            <Route path="/*" element={<ViewApp />} />
            <Route path="/user/*" element={<NotFound />}></Route>
          </>)
        : (<>
          <Route path="/*" element={<NotFound />} />
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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/NotFound";
import UserApp from "./Apps/UserApp";
import ViewApp from "./Apps/ViewApp";
import AdminApp from "./Apps/AdminApp";
import NotAccessible from "../pages/NotAccessible";

function App() {
  const { authinfo } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {authinfo === null ? (
            <>
              <Route path="/*" element={<ViewApp />} />
              <Route path="/user/*" element={<NotFound />}></Route>
              <Route path="/admin/*" element={<NotFound />}></Route>

              <Route path="/feedback" element={<NotFound />}></Route>
              <Route path="/cart" element={<NotFound />}></Route>
              <Route path="/logout" element={<NotFound />}></Route>
            </>
          ) : (
            <>
              {authinfo.role === "user" ? (
                <>
                  <Route path="/user/*" element={<UserApp />} />
                  <Route path="/admin/*" element={<NotAccessible />} />
                  <Route path="/*" element={<NotAccessible />} />
                </>
              ) : (
                <>
                  <Route path="/user/*" element={<NotFound />} />
                </>
              )}

              {authinfo.role === "admin" ? (
                <>
                  <Route path="/admin/*" element={<AdminApp />} />
                  <Route path="/user/*" element={<NotAccessible />} />
                  <Route path="/*" element={<NotAccessible />} />
                </>
              ) : (
                <>
                  <Route path="/admin/*" element={<NotFound />} />
                </>
              )}
              {/* <Route path="/canteen/*" element={<CanteenApp />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
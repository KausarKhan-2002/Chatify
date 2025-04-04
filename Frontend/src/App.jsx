import { BrowserRouter, Route, Routes } from "react-router-dom";
import PanelContainer from "./Components/panels/panelContainer";
import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./Components/auth/ProtectRoute";
import { useDispatch } from "react-redux";
import { addProfile } from "./Store/profileSlice";
import { myProfile } from "./Utils/myProfile";

const Auth = lazy(() => import("./Components/auth/Auth"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

// 1:55

const user = true;

function App() {
  const dispatch = useDispatch();


  // Suppose to be my profile
  useEffect(() => {
    dispatch(addProfile(myProfile));
  }, []);

  return (
    <BrowserRouter>
      <Toaster />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<PanelContainer />} />
          </Route>

          {/* If user already login, protect login and signup page */}
          <Route
            path="/auth"
            element={
              <ProtectRoute user={!user} redirect={"/"}>
                <Auth />
              </ProtectRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

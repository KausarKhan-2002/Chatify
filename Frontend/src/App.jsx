import { BrowserRouter, Route, Routes } from "react-router-dom";
import PanelContainer from "./Components/panels/panelContainer";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./Components/auth/ProtectRoute";

const Auth = lazy(() => import("./Components/auth/Auth"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

// 1:55

const user = true;

function App() {
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

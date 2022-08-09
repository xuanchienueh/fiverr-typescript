import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import "./global.scss";
import LoadingSuspend from "components/loading/LoadingSuspend";
import HomeTemplate from "templates/homeTemplate/HomeTemplate";
import { homeTemplateRoutes } from "routes/homeTemplateRoutes";

function App() {
  return (
    <BrowserRouter>
      {/* <Loading /> */}
      <Suspense fallback={<LoadingSuspend />}>
        <Routes>
          <Route element={<HomeTemplate />}>
            {homeTemplateRoutes.map((route, i) => {
              return <Route key={i} path={route.path} element={<route.Element />} />;
            })}
          </Route>

          {/* <Route path="admin" element={<AdminTemplace />}>
          {adminTemplateRoutes.map((route, i) => {
            return <Route key={i} path={route.path} element={<route.Element />} />;
          })}
        </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

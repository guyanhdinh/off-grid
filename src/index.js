import React from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Homes, { loader as homesLoader } from "./pages/Homes/Homes";
import HostLayout from "./components/HostLayout";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostHomes, {
  loader as hostHomesLoader,
} from "./pages/Host/HostHomes/HostHomes";
import HomeDetail, {
  loader as homeDetailLoader,
} from "./pages/Homes/HomeDetail";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import HostHomeDetail, {
  loader as hostHomeDetailLoader,
} from "./pages/Host/HostHomes/HostHomeDetail";
import HostHomeInfo from "./pages/Host/HostHomes/HostHomeInfo";
import HostHomePricing from "./pages/Host/HostHomes/HostHomePricing";
import HostHomePhotos from "./pages/Host/HostHomes/HostHomePhotos";
import Login, { action as loginAction } from "./pages/Login";
import AuthRequired from "./components/AuthRequired";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route
        path="homes"
        element={<Homes />}
        loader={homesLoader}
        errorElement={<Error />}
      />
      <Route
        path="homes/:id"
        element={<HomeDetail />}
        loader={homeDetailLoader}
        errorElement={<Error />}
      />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} loader={dashboardLoader} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route
            path="homes"
            element={<HostHomes />}
            loader={hostHomesLoader}
            errorElement={<Error />}
          />
          <Route
            path="homes/:id"
            element={<HostHomeDetail />}
            loader={hostHomeDetailLoader}
            errorElement={<Error />}
          >
            <Route index element={<HostHomeInfo />} />
            <Route path="pricing" element={<HostHomePricing />} />
            <Route path="photos" element={<HostHomePhotos />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import CompactTeam from "./pages/aboutus/CompactTeam";
import Associates from "./pages/aboutus/Associates";
import ReligionalChap from "./pages/aboutus/ReligionalChap";
import Events from "./pages/events/Events";
import News from "./pages/events/News";
import Videos from "./pages/events/Videos";
import FAQ from "./pages/guide/FAQ";
import Circulars from "./pages/guide/Circulars";
import ContactUs from "./pages/contactus/ContactUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/apex-body" element={<CompactTeam />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="/ReligionalChap" element={<ReligionalChap />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/Circulars" element={<Circulars />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

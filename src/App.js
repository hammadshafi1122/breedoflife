import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Contact from "./pages/Contact";
import Element from "./pages/Element";


import DonatePage from "./pages/DonatePage";
import FAQ from "./pages/FAQ";
import SingleBlogPage from "./pages/SingleBlogPage";
import Error404 from "./pages/Error404";
import SearchNotFound from "./pages/SearchNotFound";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <Router>
      <div className="w-screen flex justify-center">
        <div className="max-w-[1440px] h-10 w-full">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="causes" element={<Causes />} />
            <Route path="contact" element={<Contact />} />
            <Route path="donatepage" element={<DonatePage />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="singleblogpage" element={<SingleBlogPage />} />
            <Route path="error404" element={<Error404 />} />
            <Route path="searchnotfound" element={<SearchNotFound />} />
            <Route path="element" element={<Element />} />

          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
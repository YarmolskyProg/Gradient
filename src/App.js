import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, HashRouter } from "react-router-dom";
import AboutPage from "./components/About/aboutPage";
import ContactPage from "./components/Contact/contactPage";
import ExchangePage from "./components/Exchange/exchangePage";
import MainPage from "./components/Main/mainPage";
import PolicyPage from "./components/Policy/policyPage";
import TermsPage from "./components/Terms/termsPage";
import TestimonalsPage from "./components/Testimonials/testimonalsPage";

import { LoadCoins } from "./redux/coinReducer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(LoadCoins())
  }, []);
  return (
    <>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/testimonials" element={<TestimonalsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
      </Routes>
    </>
  )
}

export default App;

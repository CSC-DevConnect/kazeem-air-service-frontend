import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Accessibility,
  Book,
  BookDetails,
  Dashboard,
  Home,
  Navigation,
  SignIn,
  SignUp,
} from "./routes";
import OwnerRoute from "./routes/about/about.route";
import Contact from "./routes/contact/contact.route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<OwnerRoute />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer/:id" element={<BookDetails />} />
          <Route path='/accessibility' element={<Accessibility />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

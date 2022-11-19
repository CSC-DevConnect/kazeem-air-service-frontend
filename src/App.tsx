import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Book,
  BookDetails,
  Dashboard,
  Home,
  Navigation,
  SignIn,
  SignUp,
} from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book" element={<Book />} />
          <Route path="/:bookId" element={<BookDetails />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

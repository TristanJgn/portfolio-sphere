import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import Login from "../src/Pages/Login/Login";
import Register from "../src/Pages/Register/Register";
import Markets from "../src/Pages/Markets/Markets";
import Portfolio from "../src/Pages/Portfolio/Portfolio";
import Dashboard from "../src/Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.scss";

function App() {
  const [coinsList, setCoinsList] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/coins")
      .then((response) => {
        if (response.status === 200) {
          setCoinsList(response.data);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/markets" element={<Markets coinsList={coinsList}/>} />
        <Route path="/portfolio" element={<Portfolio coinsList={coinsList}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

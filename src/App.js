import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Nav from "./layouts/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="abouts" element={<About />} />
        <Route path="services" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;

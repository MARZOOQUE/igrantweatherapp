import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
      <BrowserRouter basename ="/igrantweatherapp">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/app.css";
import Gallery from "./pages/home/gallery/Gallery";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

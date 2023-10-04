import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Gallery";
import SlideShow from "./pages/SlideShow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/gallery" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/slideshow" element={<SlideShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

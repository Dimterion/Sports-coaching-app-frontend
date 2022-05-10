import { BrowserRouter, Route, Routes } from "react-router-dom";
import HorizontalNav from "./components/HorizontalNav/HorizontalNav";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HorizontalNav />
      <VerticalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

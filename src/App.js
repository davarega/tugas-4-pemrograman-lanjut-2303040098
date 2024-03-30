import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/contactPage";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/aboutPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

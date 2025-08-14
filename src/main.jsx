import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import "remixicon/fonts/remixicon.css";
import Footer from "./Components/Footer.jsx";
import PreLoader from "./Components/PreLoader.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import "./index.css";
AOS.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-4">
      <Navbar />

      <App />
      <Footer />
    </div>
  </StrictMode>
);

import { useEffect } from "react";
import AOS from "aos";
import Home from "./pages/Home";
import "./App.css";
import "./css/style.scss";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 750,
      easing: "ease-out-quart",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
  }, []); // triggered on route change

  return <Home />;
}

export default App;

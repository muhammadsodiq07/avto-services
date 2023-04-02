import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./routes/Routers";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import ScrollTop from "./components/Scrolltop/Scrolltop";

function App() {
  AOS.init({
    duration: 700,
  });

  return (
    <>
      <div className="app">
        {/* ================== HEADER ================== */}
        <Header />

        {/* ================== MAIN SECTIONS ================== */}
        <main className="main">
          <Routes />
        </main>

        {/* ================== FOOTER ================== */}
        <Footer />
      </div>
      {/* ================== SCROLL TOP ================== */}
      <ScrollTop />
    </>
  );
}

export default App;

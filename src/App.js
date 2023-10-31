import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation1";
import Footer from "./customer/components/Footer/Footer";
import Allrouter from "./routers/Allrouter.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Navigation />
        <Allrouter />
        <Footer />
      </div>
    </>
  );
}

export default App;

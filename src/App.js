import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation1";
import Footer from "./customer/components/Footer/Footer";
import CustomerRouters from "./Routers/CustomerRouters.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Routes>
          <Route path="/*" element={<CustomerRouters/>} />
        </Routes>
        {/* <Navigation /> */}
        {/* <Allrouter /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;

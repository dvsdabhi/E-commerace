import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters.jsx";
import { Route, Routes } from "react-router-dom";
import AdminRouter from "./Routers/AdminRouter.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Routes>
          <Route path="/*" element={<CustomerRouters />} />
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

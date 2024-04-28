import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo";
import Stepthree from "./components/Stepthree";
import Checkout from "./components/Checkout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/step-1" replace />} />
        <Route element={<Checkout></Checkout>}>
          <Route path="/step-1" element={<Stepone />} />
          <Route path="/step-2" element={<Steptwo />} />
          <Route path="/step-3" element={<Stepthree />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

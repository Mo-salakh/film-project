import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Film } from "./pages/Film";
import { Home } from "./pages/Home";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="film/:id" element={<Film />} />
      </Routes>
    </div>
  );


}

export default App;

import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <h1>Welcome to Web Dev</h1>
    //   <h2>Hejia Li</h2>
    //   <Labs />
    // </div>
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;


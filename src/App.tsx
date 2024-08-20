import { Routes, Route  }from "react-router-dom";
import Home from "./pages/Home";
// import Rainbow from "./pages/Rainbow";
import Layouts from "./pages/Layouts";


function App() {
  return (
      <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/rainbow" element={<Rainbow/>} /> */}
      </Route>
      </Routes> 
  );
}


  


export default App;

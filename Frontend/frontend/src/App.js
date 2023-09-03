import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/register" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;

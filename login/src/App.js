import LoginBody from "./pages/LoginBody";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import RegisterBody from "./pages/Register";
import Home from "../src/pages/Home";
import Privateroute from "./routes/Privateroute";
// import Publicroute from "./routes/Publicroute"

function App() {
  return (
    <div className="App">

 <Routes>
   {/* <Publicroute/> */}
   <Route element={<Privateroute/>}>
   <Route path="/home" exact element={<Home />} />
   </Route>
<Route path="/" exact element={<RegisterBody />}></Route>
<Route path="/login" exact element={<LoginBody />}></Route>


</Routes>
</div>
  );
}

export default App;

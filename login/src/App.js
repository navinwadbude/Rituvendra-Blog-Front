import LoginBody from "./login/LoginBody";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import RegisterBody from "./RegisterBody/RegisterBody";
function App() {
  return (
    <div className="App">

 <Routes>
<Route path="/" exact element={<RegisterBody />}></Route>
<Route path="/login" exact element={<LoginBody />}></Route>
</Routes>







    </div>
  );
}

export default App;

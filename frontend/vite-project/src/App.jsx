import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Upload from "./components/Upload";

function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/upload" element={<Upload/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
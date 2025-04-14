import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages"
import Books from "./pages/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Team from "./pages/team";
import Kontak from "./pages/kontak";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="books" element={<Books/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="team" element={<Team/>} />
            <Route path="kontak" element={<Kontak/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

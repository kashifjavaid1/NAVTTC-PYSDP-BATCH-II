import Navbar from "./component/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {

  return (
    <>
    <div>
      <BrowserRouter> 
    <Navbar/>
    <Routes>
        <Route path="/" element={<h1>This is a Products Page</h1>}/>
        <Route path="/add-products" element={<h1>This is a Add Products Page</h1>}/>
        <Route path="/update-products" element={<h1>This is a Update Products Page</h1>}/>
        <Route path="/logout" element={<h1>This is a Logout Page</h1>}/>
        <Route path="/profile" element={<h1>This is a Profile Page</h1>}/>
        </Routes> 
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

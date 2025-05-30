import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./component/SignUp"
import Products from "./component/Product"
import ProductList from "./component/ProductList"
function App() {

  return (
    <>
    <div>
      <BrowserRouter> 
    <Navbar/>

    <Routes>
        <Route path="/" element={<h1><ProductList/></h1>}/>
        <Route path="/add-products" element={<h1><Products/></h1>}/>
        <Route path="/update-products" element={<h1>This is a Update Products Page</h1>}/>
        <Route path="/logout" element={<h1>This is a Logout Page</h1>}/>
        <Route path="/profile" element={<h1>This is a Profile Page</h1>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        </Routes> 
      </BrowserRouter>
      <Footer/>
    </div>
    </>
  )
}

export default App

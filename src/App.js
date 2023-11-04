import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

const App = ()=>{
  return (
      <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Routes>
      </div>
  )
}

export default App;
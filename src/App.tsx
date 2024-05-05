import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Socials from "./pages/Socials"
import Experience from "./pages/Experience"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/socials' element={<Socials/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

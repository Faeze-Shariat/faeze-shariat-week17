
import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from './components/templates/HomePage'
import AddContactPage from "./components/templates/AddContactPage"

function App({dispatch}) {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/addContact" element={<AddContactPage dispatch={dispatch}/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App

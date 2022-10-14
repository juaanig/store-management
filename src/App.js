import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";

import './App.css';
import {AuthProvider} from "./contexts/authContext/authContext";
import Section from './pages/GeneralDisplay/Section/Section';
import Layout from "./pages/Layout/Layout";
import Forms from "./pages/Forms/Forms";
import Login from "./pages/Login/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout/>} >
      <Route path="/general" element={<Section/>} />
      <Route path="/superUser" element={<Forms/>} />
      <Route path="/login" element={<Login/>} />
    </Route>
  )

);


const App = () => {

  
  
  return(

    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  
  ) 
}

export default App;

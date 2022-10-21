import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";

import './App.css';
import {AuthProvider} from "./contexts/authContext/AuthContext";
import {ThemeProvider} from "./contexts/ThemeContext/ThemeContext";
import Section from './pages/Section/Section';
import Layout from "./pages/Layout/Layout";
import Forms from "./pages/Forms/Forms";


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout/>} >
      <Route path="/general" element={<Section/>} />
      <Route path="/superUser" element={<Forms/>} />
    </Route>
  )

);


const App = () => {

  return(

    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </AuthProvider>
  
  ) 
}

export default App;

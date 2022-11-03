import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";

import './App.css';
import {AuthProvider} from "./contexts/authContext/AuthContext";
import {ThemeProvider} from "./contexts/ThemeContext/ThemeContext";
import Section from './pages/Section/Section';
import Layout from "./pages/Layout/Layout";
import DashboardSU from "./pages/DashBoardSU/DashboardSU";
import Login from "./components/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout/>} >
      <Route path="/login" element={<Login/>} />
      <Route path="/general" element={<Section/>} />
      <Route path="/superUser" element={<DashboardSU/>} />
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

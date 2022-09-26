import { Route,RouterProvider,Navigate,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";

import './App.css';

import Section from './pages/GeneralDisplay/Section/Section';
import Layout from "./pages/Layout/Layout";

/*

  HACER COMPONENETE LOGIN ( HERMAN )
  HACER COMPONENETE FORM ( JUAN )

*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="/general" element={<Section />} />
      <Route path="/login" element={<Section/>/*<Login />*/} />
    </Route>
  )

);


const App = () => {

  return <RouterProvider router={router}/>

}

export default App;

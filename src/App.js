import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";

import './App.css';

import Section from './pages/GeneralDisplay/Section/Section';
import Layout from "./pages/Layout/Layout";
import Forms from "./pages/Forms/Forms";

/*
auntentication context :

value {
  nameUser:
  mail:
}


*/

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout/>} >
      <Route path="/general" element={<Section />} />
      <Route path="/superUser" element={<Forms/>} />
    </Route>
  )

);


const App = () => {
  return <RouterProvider router={router}/>
}

export default App;

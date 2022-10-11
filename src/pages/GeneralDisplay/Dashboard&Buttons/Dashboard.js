import React,{useContext} from 'react'
import { authContext } from '../../../contexts/authContext/authContext';

import Buttons from '../Buttons/Buttons';
import Notes from '../Notes/Notes';
import "./Dashboard.css";

const Dashboard = () => {

  const {data} = useContext(authContext)

  console.log(data)

  return (
    <>
        <div className='container-db-btns'>
          <Notes/>
          <Buttons/>
        </div>
    </>
  )
}

export default Dashboard;
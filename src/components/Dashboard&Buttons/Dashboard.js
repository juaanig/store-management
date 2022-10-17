import React,{useContext} from 'react'

import  AuthContext  from '../../contexts/authContext/authContext';

import Notes from '../Notes/Notes';
import "./Dashboard.css";

const Dashboard = () => {

  const {info} = useContext(AuthContext)

  console.log("info:", info )

  return (
    <>
      <div className='container-db-btns'>
        <Notes/>
      </div>
    </>
  )
}

export default Dashboard;
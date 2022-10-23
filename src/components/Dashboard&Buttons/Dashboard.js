import React,{useContext} from 'react'

import  AuthContext  from '../../contexts/authContext/AuthContext';

import Notes from '../Notes/Notes';
import "./Dashboard.css";

const Dashboard = () => {

  const {user} = useContext(AuthContext)

  return (
    <>
      <div className='container-db-btns'>
        <Notes/>
      </div>
    </>
  )
}

export default Dashboard;
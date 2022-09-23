import React from 'react'
import Buttons from '../Buttons/Buttons';
import Notes from '../Notes/Notes';
import "./Dashboard.css";

const Dashboard = () => {
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
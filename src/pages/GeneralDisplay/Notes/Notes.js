import React from 'react'
import "./Notes.css"

const Notes = () => {
  return (
    <div className='dashboard'>
       <div className='notepad'>
            <p className='notes-title'>NOTAS</p>
            <div className='notes-area'>
                <div className='notes'>
                    Esto es una nota
                </div>
                <div className='notes'>
                    Esto es una nota
                </div>
                <div className='notes'>
                    Esto es una nota
                </div>
            </div>
            <button className='button-add-note'>añadir</button>
       </div>
    </div>
  )
}

export default Notes
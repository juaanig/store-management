import "./Notes.css";

import { useState } from 'react';


const Notes = () => {
  
  const [arrayNotes,setArrayNotes] = useState([]);
  const [enteredNote, setEnteredNote] = useState("");

  const enteredNoteHandler = (event) => {
    setEnteredNote(event.target.value);
  };

  const submitNoteHandler = (event) => {
    event.preventDefault();
    if (enteredNote === "") {
      alert('No se puede agregar una nota vacia');
      setEnteredNote("");
    } else {
      arrayNotes.push(enteredNote);
      setArrayNotes(arrayNotes);
      setEnteredNote("");
    };
  };

  return (
    <div className='dashboard'>
       <div className='notepad'>
            <p className='notes-title'>NOTAS</p>
            <div className='notes-area'>
              {arrayNotes.length === 0 
              ? (<div className='notes empty'>No hay notas</div>) 
              : arrayNotes.map((note, index) => {
                return (
                  <div className='notes' key={index}>
                    {note}
                  </div>
                )
              })} 
            </div>
            <div className='new-notes'>
              <input 
                type="text" 
                placeholder='Escriba la nota que desea agregar' 
                onChange={enteredNoteHandler} 
                value={enteredNote}>
              </input>
              <button className='button-add-note' onClick={submitNoteHandler}>+</button>
            </div>
       </div>
    </div>
  )
}

export default Notes
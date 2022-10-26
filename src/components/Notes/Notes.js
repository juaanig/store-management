import "./Notes.css";
import { useEffect, useState } from "react";
import {useNotes} from '../../hooks/hookNotes/useNotes'

const Notes = () => {

  const {getListNotes} = useNotes();
  const [notes,setNotes] = useState([]);

  useEffect(() => {
        
    const getNotes = async() => {
        const data = await getListNotes();
        setNotes(data)
    }
    
    getNotes();
    
  },[])

  console.log(notes)
  
  return (  
    <div className='container'>
       <div className='notepad'>
            <p className='notes-title'>NOTAS</p>
            <div className='notes-area'>
              {notes && notes.map((note, index) => (<div className='notes text-dark' key={index}>{note.note}</div> ))}
            </div>
       </div>
    </div>
  )
}

export default Notes
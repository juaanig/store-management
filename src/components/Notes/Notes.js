import { useEffect, useContext, useState } from "react";
import {useNotes} from '../../hooks/hookNotes/useNotes'
import ProductContext from '../../contexts/productsContext/ProductContext';

const Notes = () => {

  const {getListNotes} = useNotes();
  const {update} = useContext(ProductContext)
  const [notes, setNotes] = useState();

  const listNotes = async () => {
    setNotes(await getListNotes());
  }

  useEffect(() => {
    listNotes()
  },[])

  if (update){
    listNotes()
  }
  
  return (  
    <div className='container bg-secondary rounded-3 py-2 px-3 section'>
      <div className="pb-3">
        <p className='text-dark fw-bold text-center'>NOTAS</p>
          <div className=''>
            {notes && notes.map((note, index) => (<div className='bg-light mb-2 rounded-2 p-1 text-dark' key={index}>{note.note}</div> ))}
          </div>
      </div>
    </div>
    
  )
}

export default Notes
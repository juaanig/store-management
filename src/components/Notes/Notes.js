import { useEffect, useContext } from "react";
import {useNotes} from '../../hooks/hookNotes/useNotes'
import ProductContext from '../../contexts/productsContext/ProductContext';

const Notes = () => {

  const {getListNotes, setNotesHandler, notes} = useNotes();
  const {updateNotes, setUpdateNotes} = useContext(ProductContext)

  const listNotes = async () => {
    setNotesHandler(await getListNotes());
  }

  useEffect(() => {
    listNotes()
  },[])

  if (updateNotes){
    listNotes()
    setUpdateNotes(false)
  }
  
  return (  
    <div className='container bg-secondary rounded-3 py-2 px-3 section'>
      <div className="pb-3">
        <p className='text-dark fw-bold text-center'>NOTAS</p>
          <div className=''>
            {notes && notes.map((note, index) => (<div className={'mb-2 rounded-2 p-1 text-dark bg-'+note.variant} key={index}>{note.note}</div> ))}
          </div>
      </div>
    </div>
    
  )
}

export default Notes
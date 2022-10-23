import "./Notes.css";

const Notes = ({notes}) => {

  return (
    <div className='container'>
       <div className='notepad'>
            <p className='notes-title'>NOTAS</p>
            <div className='notes-area'>
              {notes.length === 0 
              ? (<div className='notes'>No hay notas</div>) 
              : notes.map((note, index) => {
                return (
                  <div className='notes text-dark' key={index}>
                    {note}
                  </div>
                )
              })} 
            </div>
       </div>
    </div>
  )
}

export default Notes
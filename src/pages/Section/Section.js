import Table from '../../components/Table/Table';
import FormProducts from '../../components/FormProducts/FormProducts';
import Notes from '../../components/Notes/Notes';


const Section = () => {
    
    return (
      <div>
        <div className='row mt-4 m-1 '>
          <div className='col '>
            <Notes/>
          </div>
          <div className='col-7'>
            <Table/>
          </div>
          <div className='col'>
            <FormProducts/>
          </div>
        </div>
      </div>
    )
}

export default Section;
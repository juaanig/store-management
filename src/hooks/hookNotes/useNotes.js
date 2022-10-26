import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

export const useNotes = () => {

    const notesCollection = collection(db, "notes");

    const getListNotes = async () => {

        const data = await getDocs(notesCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
        ))

        const dataSorted = dataParsed.sort((a,b) => {
            return new Date(b.date) - new Date(a.date)
        })

        return dataSorted;
    }

    return {
        getListNotes
    }
        
}

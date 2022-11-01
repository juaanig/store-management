import { collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

import AuthContext from '../../contexts/authContext/AuthContext';
import { useContext, useState } from 'react';

export const useNotes = () => {

    const notesCollection = collection(db, "notes");

    const {user} = useContext(AuthContext)

    const [notes,setNotes] = useState([]);

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

    const deleteExtraNotes = async () => {
        const notes = await getListNotes();
        if(notes.length > 10){
            console.log("mas de 10")
            const lastNote = doc(db, "notes", notes[10].id);
            await deleteDoc(lastNote);
        }
        setNotes(await getListNotes())
    }

    const noteHandler = async (obj) => {
        const actualtime = new Date();
        const actualtimeSort = actualtime.toISOString();
        const actualtimeNotes = actualtime.toLocaleString();
        
        if(user.role === "Vendedor"){
            const sellNote= `${actualtimeNotes}: ${user.name} ${user.lastName} vendió ${obj.sellAmount} unidades de ${obj.productName}.`
            const note = {note: sellNote, date: actualtimeSort};
            await addDoc(notesCollection,note)
        } else{
            const loadNote=`${actualtimeNotes}: ${user.name} ${user.lastName} recibió ${obj.amount} unidades de ${obj.productName}`
            const note = {note: loadNote, date: actualtimeSort};
            await addDoc(notesCollection,note)
        }
        deleteExtraNotes()
        setNotes(await getListNotes())
    }

    return {
        getListNotes,
        noteHandler,
        setNotes,
        notes
    }
        
}

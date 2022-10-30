import { collection, getDocs, addDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

import AuthContext from '../../contexts/authContext/AuthContext';
import { useContext } from 'react';

export const useNotes = () => {

    const notesCollection = collection(db, "notes");

    const {user} = useContext(AuthContext)

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

    const noteHandler = async (sellAmount, productName, obj) => {
        const actualtime = new Date();
        const actualtimeSort = actualtime.toISOString();
        const actualtimeNotes = actualtime.toLocaleString();
        
        if(user.role === "Vendedor"){
            const sellNote= `${actualtimeNotes}: ${user.name} ${user.lastName} vendió ${sellAmount} unidades de ${productName}.`
            const note = {note: sellNote, date: actualtimeSort};
            await addDoc(notesCollection,note)
        } else{
            const loadNote=`${actualtimeNotes}: ${user.name} ${user.lastName} recibió ${obj.amount} unidades de ${obj.productName}`
            const note = {note: loadNote, date: actualtimeSort};
            await addDoc(notesCollection,note)
        }
    }

    return {
        getListNotes,
        noteHandler
    }
        
}



import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

export const useAuth = () => {

    const usersCollection = collection(db, "users");

    const getUsersToCompare = async (email) => {
            
        const data = await getDocs(usersCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data()}) 
        ))

        let aux = dataParsed.filter((item) => item.email === email ).length

        console.log(aux)

        return aux;
        
    }

    return {
        getUsersToCompare
    }
        
}


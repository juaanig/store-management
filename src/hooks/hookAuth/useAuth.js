import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

export const useAuth = () => {

    const usersCollection = collection(db, "users");

    const getList = async () => {

        const data = await getDocs(usersCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data()}) 
        ))

        return dataParsed;
    }

    const getPassToCompare = async (pass) => {
            
        let docsUser = await getList()
        let aux = docsUser.filter((item) => item.password === pass ).length
        let result = aux === 0 ? true : false
        return result;
    }


    const getUsersToCompare = async (email) => {

        let docsUser = await getList()
        let aux = docsUser.filter((item) => item.email === email ).length
        let result = aux === 0 ? true : false
        return result;
    }

    return {
        getUsersToCompare,
        getPassToCompare
    }
        
}


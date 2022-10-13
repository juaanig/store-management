import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

export const useAuth = () => {

    const usersCollection = collection(db, "users");

    const getList = async () => {

        const data = await getDocs(usersCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
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
        let aux = docsUser.filter((item) => item.email === email )
        let result = aux.length === 0 ? true : false
        let uid = result ? null : aux[0].id

        return{
            result,
            uid
        } 
    }

    return {
        getUsersToCompare,
        getPassToCompare,
        getList
    }
        
}


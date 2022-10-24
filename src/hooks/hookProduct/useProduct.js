import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

export const useProduct = () => {

    const productCollection = collection(db, "products");

    const getListProducts = async () => {

        const data = await getDocs(productCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
        ))

        return dataParsed;
    }

    return {getListProducts}
}    
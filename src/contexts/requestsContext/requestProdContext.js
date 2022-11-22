import { createContext,useEffect,useState } from "react";
import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

const RequestProducts = createContext();

const RequestProductsProvider = ({children}) => { 

    const productCollection = collection(db, "products");
    const usersCollection = collection(db, "users");

    const [products,setProducts] = useState([]);
    const [listUser,setListUsers] = useState([]);

    const getListUsers = async () => {

        const data = await getDocs(usersCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
        ))

        setListUsers(dataParsed);
    }

    const getListProducts = async () => {
    
        const data = await getDocs(productCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
        ))
            
        setProducts(dataParsed)
    }

    useEffect(()=>{ 
        getListProducts()
        getListUsers()
        console.log("LOOP EN CONTEXT, CORTÁ LA EJECUCIÓN WACHIN")
    },[])
    
    return(
        <RequestProducts.Provider value={{products,setProducts,listUser, setListUsers}}>
            {children}
        </RequestProducts.Provider>
    )

}

export {RequestProductsProvider};
export default RequestProducts;
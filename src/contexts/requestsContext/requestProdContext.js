import { createContext,useEffect,useState } from "react";
import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

const RequestProducts = createContext();

const RequestProductsProvider = ({children}) => { 

    const productCollection = collection(db, "products");
    const [products,setProducts] = useState([]);

    const getListProducts = async () => {
    
        const data = await getDocs(productCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
        ))
            
        setProducts(dataParsed)
    }

    useEffect(()=>{ 
        getListProducts()
        console.log("LOOP EN CONTEXT, CORTÁ LA EJECUCIÓN WACHIN")
    },[])
    
    return(
        <RequestProducts.Provider value={{products,getListProducts}}>
            {children}
        </RequestProducts.Provider>
    )

}

export {RequestProductsProvider};
export default RequestProducts;
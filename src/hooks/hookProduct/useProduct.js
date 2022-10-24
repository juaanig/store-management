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
    
    /* TERMINAR ALTA , BAJA Y  MODIFICACIÓN */

    /* 
        PARA LA ALTA DE PRODUCTO EL HOOK RECIBE DATOS 
        - NOMBRE
        - CANTIDAD
        - F.VENCIMIENTO
        - F.INGRESO
        - PRECIO

        NOTA: SI EL PRODUCTO YA EXISTE SOLO AUMENTA CANTIDAD Y FECHA DE INGRESO

    */

    /*
        PARA LA MODIFICACIÓN:
        SE EJECUTA CON ID 
        Y LA CANTIDAD QUE SE QUIERE VENDER 
    */


    return {getListProducts}
}    


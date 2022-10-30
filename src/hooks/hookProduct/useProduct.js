import { collection,addDoc, getDocs} from 'firebase/firestore' ;
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
    
    const validateFormProduct = (form) => {

        let _errors = {}
        if(form.productName === ""){
            _errors.productName  = 'Campo obligatorio.' ;
        }
        //====================================
        if(form.price === ''){
            _errors.price = 'Campo obligatorio.';
        }
        //====================================
        if(form.amount === ''){
            _errors.amount = 'Campo obligatorio.';
        }
        //====================================
        if(form.elaborationDate === '' ){
            _errors.elabDate = 'Campo obligatorio.';
        }
        //====================================
        if(form.expirationDate === "" ){
            _errors.expDate = 'Campo obligatorio.';
        }
        //====================================

        return _errors;
    }

    const loadProduct = async (obj) => {

        let aux = (await getListProducts()).filter((item)=> item.productName === obj.productName.trim())

        //Guardar productos en mayuscula para que no haya comflictos a la hora de buscar. 

        if (aux.length === 0 ){
            await addDoc(productCollection,obj)
        }else{
            alert("producto ya cargado")
        }
    }
    
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


    return {getListProducts,loadProduct,validateFormProduct}
}    


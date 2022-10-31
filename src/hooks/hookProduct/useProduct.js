import { collection, addDoc, deleteDoc, getDocs, doc, updateDoc} from 'firebase/firestore' ;
import { useState } from 'react';
import { db } from '../../firebaseConfig/firebase' ;

import { useNotes } from '../hookNotes/useNotes';

export const useProduct = () => {
    
    const productCollection = collection(db, "products");
    const {noteHandler} = useNotes()
    const [products, setProducts] = useState([])
    
    const getListProducts = async () => {
        
        const data = await getDocs(productCollection);
        const dataParsed = (data.docs.map( 
            (doc) => ({...doc.data(),id:doc.id}) 
        ))
            
        return dataParsed;
    }
        
    const setProductsHandler = async () => {
        setProducts(await getListProducts())
    }
    
    const validateFormProduct = (form) => {
        
        console.log(typeof form.price)
        console.log(typeof form.amount)
        let _errors = {}
        if(form.productName === ""){
            _errors.productName  = 'Campo obligatorio.' ;
        }
        //====================================
        if(form.price === ''){
            _errors.price = 'Campo obligatorio.';
        }else if(Number(form.price)<0){
            _errors.price = 'ingrese un valor superior a cero.';
        }
        //====================================
        if(form.amount === ''){
            _errors.amount = 'Campo obligatorio.';
        }else if(Number(form.amount)<0){
            _errors.amount = 'ingrese un monto superior a cero.';
        }
        //====================================
    if(form.elaborationDate === '' ){
        _errors.elabDate = 'Campo obligatorio.';
    }
    //====================================
    if (form.expiration){
        if(form.expirationDate === "" ){
            _errors.expDate = 'Campo obligatorio.';
        }else if(Date.parse(form.expirationDate) < Date.parse(form.elaborationDate)){
            _errors.expDate = 'la fecha de vencimiento no puede ser menor a la de elaboración.';
        }
    }
    //====================================
    
    return _errors;
    }
    

    const loadProduct = async (obj) => {
        
        let aux = (await getListProducts()).filter((item)=> item.productName === obj.productName.trim())
        
        if (aux.length === 0 ){
            await addDoc(productCollection,obj)
        }else{
            const oldProduct = doc(db,"products",aux[0].id)
            await updateDoc(oldProduct,{...obj,amount:(Number(aux[0].amount) + Number(obj.amount))})
        }
        noteHandler(obj)
        setProducts(await getListProducts())
    }

    const deleteProductHandler = async (id) => {
        const ProductDoc = doc(db,"products", id)
        await deleteDoc(ProductDoc)
    }

    return {getListProducts,loadProduct,validateFormProduct, setProductsHandler, products, deleteProductHandler}
}    


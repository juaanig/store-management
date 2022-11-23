import { useContext } from 'react';

import { collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

import RequestProducts from '../../contexts/requestsContext/requestProdContext';

import { useNotes } from '../hookNotes/useNotes';

export const useProduct = () => {
    
    const productCollection = collection(db, "products");

    const {products,setProducts} = useContext(RequestProducts); 

    const {noteHandler, deleteProductNote, modifyProductNote} = useNotes()
        
    const validateLoadFormProduct = (form) => {
        
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
    
    const validateSellFormProduct = async (form) => {
        let _errors = {}
        let aux = (products).filter((item)=> item.productName === form.productName.trim())
        if(form.productName === ""){
            _errors.productName  = 'Campo obligatorio.' ;
        }
        //====================================
        if(form.sellAmount === ''){
            _errors.sellAmount = 'Campo obligatorio.';
        }else if(Number(form.sellAmount)<0){
            _errors.sellAmount = 'Ingrese un monto superior a cero.';
        }else if (Number(form.sellAmount) > Number(aux[0].amount)){
            _errors.sellAmount = 'No hay suficientes unidades disponibles.';
        }
        //====================================
        
        return _errors;
    }

    const loadProduct = async (obj) => {
        
        let aux = (products).filter((item)=> item.productName === obj.productName.trim())
        
        if (aux.length === 0 ){
            await addDoc(productCollection,obj)
            setProducts([...products,obj])        
        }else{
            const oldProduct = doc(db,"products",aux[0].id)
            let auxNewProduct = {...obj,amount:(Number(aux[0].amount) + Number(obj.amount))}
            await updateDoc(oldProduct,auxNewProduct)
            const index = products.findIndex((item)=>{
                return item.id === aux[0].id ;
            })
            let auxList = [...products]
            auxList[index] = auxNewProduct
            setProducts(auxList)
        }
        noteHandler(obj)
    }
    
    const sellProduct = async (obj) => {
        let aux = (products).filter((item)=> item.productName === obj.productName.trim())
        const oldProduct = doc(db,"products",aux[0].id)

        const index = products.findIndex((item)=>{
            return item.id === aux[0].id ;
        })

        if (Number(obj.sellAmount) < Number(aux[0].amount)) {

            let auxNewProduct = {...aux[0],amount:(Number(aux[0].amount) - Number(obj.sellAmount))}
            let auxList = [...products]
            auxList[index] = auxNewProduct
            setProducts(auxList)
            await updateDoc(oldProduct,auxNewProduct)

        }else {
 
            let auxList = [...products]
            auxList.splice(index,1)
            setProducts(auxList)
            await deleteDoc(oldProduct)
        }
        noteHandler(obj)

    }
    
    const deleteProductHandler = async (id) => {
        
        const ProductDoc = doc(db,"products", id)
        let aux = (products).filter((item)=> item.id === id)

        const index = products.findIndex((item)=>{
            return item.id === aux[0].id ;
        })

        let auxList = [...products]
        auxList.splice(index,1)
        setProducts(auxList)

        await deleteDoc(ProductDoc)
        deleteProductNote(aux)
    }
    
    const modifyProductHandler = async (obj) => {
        
        let aux = (products).filter((item)=> item.id === obj.id)
        const oldProduct = doc(db,"products",aux[0].id)

        const index = products.findIndex((item)=>{
            return item.id === aux[0].id ;
        })

        let auxList = [...products]
        auxList[index] = obj
        setProducts(auxList)
    
        await updateDoc(oldProduct,obj)
        modifyProductNote(obj)
    }
    
    return {loadProduct,validateLoadFormProduct, validateSellFormProduct, deleteProductHandler, sellProduct, modifyProductHandler}
}    
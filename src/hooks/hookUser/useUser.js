import { useContext, useState } from "react"
import ProductContext from "../../contexts/productsContext/ProductContext"
import RequestProducts from "../../contexts/requestsContext/requestProdContext"
import { useValidate } from "../hookValidate/useValidate"

import {collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;


export const useUser = () => {

    const usersCollection = collection(db, "users");

    const {errors, setErrors} = useState();

    const {listUser, setListUsers} = useContext(RequestProducts)
    const {showLoader, setShowLoader} = useContext(ProductContext)
    const {validateForm} = useValidate()

    // Función para enviar los datos del formulario a la base de datos
    const createUser = async (obj) =>{
        await addDoc(usersCollection,obj)
        setListUsers([...listUser,obj])
    }
    
    //Función para eliminar un usuario
    const deleteUser = async (id) => {
        const userDoc = doc(db,"users", id)
        await deleteDoc(userDoc)

        let aux = (listUser).filter((item)=> item.id === id)
        console.log(aux)

        const index = listUser.findIndex((item)=>{
            return item.id === aux[0].id ;
        })
        let auxList = [...listUser]
        auxList.splice(index,1)
        setListUsers(auxList)
    }

    //Función para editar usuario 
    const updateUser = async (user,id) => {
        
        //agregar los cambios a la BBDD
        const oldUser = doc(db,"users",id) //PODRIAMOS USAR USECALLBACK
        await updateDoc(oldUser,user)
        
        //En el arreglo pushearle los valores cambiados
        let aux = (listUser).filter((item)=> item.id === id)
        console.log(user)

        const index = listUser.findIndex((item)=>{
            return item.id === aux[0].id ;
        })
        let auxList = [...listUser]
        auxList[index] = {...user,id:id};
        console.log(auxList[index])
        setListUsers(auxList)


    }

    return {createUser, deleteUser,updateUser}
}
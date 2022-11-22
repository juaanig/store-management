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
    /*
    const modifyDataFormHandler = (index) => {
        setNameUser(allUsers[index].name);
        setLastNameUser(allUsers[index].lastName);
        setEmail(allUsers[index].email);
        setPassword(allUsers[index].password);
        setRole(allUsers[index].role);

        setCurrentId(allUsers[index].id);

        setShowForm(true);
        setSubmitButton(false);
        setEditButton(true)
    }



    
    //Función para editar usuario 
    const editUserHandler = async () => {
        
        setShowLoader(true)
        const oldUser = doc(db,"users",currentId)
        
        let validate = await validateForm(setUser())  
        delete validate.user;
        setErrors(validate)

        if(Object.entries(validate).length === 0){  
            await updateDoc(oldUser,setUser())
            cleanInputs();
            setSubmitButton(true);
            setEditButton(false);
            setAllUsers(await getList())
        }
        setShowLoader(false)
    }*/

    return {createUser, deleteUser}
}
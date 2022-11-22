import { useContext } from "react"
import ProductContext from "../../contexts/productsContext/ProductContext"
import RequestProducts from "../../contexts/requestsContext/requestProdContext"


const useUser = () => {

    const {listUser, setListUsers} = useContext(RequestProducts)
    const {showLoader, setShowLoader} = useContext(ProductContext)

    // Funcion setear los valores del formulario en un objeto
    const setUser = (obj) => {
        const user = {
            name: obj.nameUser.trim(),
            lastName: obj.lastNameUser.trim(),
            email: obj.email.trim(),
            password: obj.password.trim(),
            role: obj.role,
        };

        return user;
    }

    // Función para enviar los datos del formulario a la base de datos
    const submitHandler = async (obj) =>{
        setShowLoader(true)
        let validate = await validateForm(setUser(obj))
        setErrors(validate)

        if(Object.entries(validate).length === 0){
            await addDoc(usersCollection,setUser())
            cleanInputs();
            setAllUsers(await getList())
        }
        setShowLoader(false)
    }
    
    // Función para eliminar un usuario
    const deleteRowUserHandler = async (id) => {
        setShowLoader(true)
        const userDoc = doc(db,"users", id)
        await deleteDoc(userDoc)
        setAllUsers(await getList())
        setShowLoader(false)
    }

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
    }

    return {submitHandler}
}
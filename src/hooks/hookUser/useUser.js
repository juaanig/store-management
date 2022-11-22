import { useContext } from "react"
import RequestProducts from "../../contexts/requestsContext/requestProdContext"


const useUser = () => {

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

    // Función para eliminar un usuario
    const deleteRowUserHandler = async (id) => {
        setShowLoader(true)
        const userDoc = doc(db,"users", id)
        await deleteDoc(userDoc)
        setAllUsers(await getList())
        setShowLoader(false)
    }

    // Funcion setear los valores del formulario en un objeto
    const setUser = () => {
        const user = {
            name: nameUser.trim(),
            lastName:lastNameUser.trim(),
            email: email.trim(),
            password: password.trim(),
            role: role,
        };

        return user;
    }

    // Función para enviar los datos del formulario a la base de datos
    const submitUserHandler = async () =>{
        setShowLoader(true)
        let validate = await validateForm(setUser())
        setErrors(validate)

        if(Object.entries(validate).length === 0){
            await addDoc(usersCollection,setUser())
            cleanInputs();
            setAllUsers(await getList())
        }
        setShowLoader(false)
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
}
import { useState } from "react";


export const useForm = (initialForm,validateForm) => {
    
    const [form,setForm] = useState(initialForm);
    const [errors,setErrors] = useState({});
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState(null);
    
    const handlerChange = (e) => {
        const {name,value} = e.target
        
        setForm({  
            ...form,
            [name]:value,
        }) 
    };

    const handlerBlur = (e) => {
        handlerChange(e)
        setErrors(validateForm(form))        
    };

    const handlerSubmit = (e) => {};
  
  
    return {
        form,
        errors,
        loading,
        response,
        handlerChange,
        handlerBlur,
        handlerSubmit
    }
}
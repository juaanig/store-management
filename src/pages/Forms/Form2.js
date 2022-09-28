import { useForm } from "./hookForm/useForm"

const initialForm = {
    name : "",
    email: "",
    subject: "",
    comments: ""
}

const validationsForm  = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;


    if(!form.name.trim()){
        errors.name = "El campo nombre es requerido"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo nombre solo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()){
        errors.email = "El campo email es requerido"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El email es incorrecto"
    }

    if(!form.subject.trim()){
        errors.subject = "El campo Asunto es requerido"
    }

    if(!form.comments.trim()){
        errors.comments = "El campo comentarios es requerido"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo comentario no debe exceder los 255 caracteres"
    }
    
    return errors;
}


const Form2 = () => {

    const {  

        form,
        errors,
        loading,
        response,
        handlerChange,
        handlerBlur,
        handlerSubmit

    } = useForm(initialForm,validationsForm)

    return (
        <div>
            <hr/>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" placeholder="escribe tu nombre" onBlur={handlerBlur} onChange={handlerChange} value={form.name} required />   
                {errors.name && <p>{errors.name}</p>}
                <br/>
                <input type="email" name="email" placeholder="escribe tu email" onBlur={handlerBlur} onChange={handlerChange} value={form.email} required />   
                {errors.email && <p>{errors.email}</p>}
                <br/>
                <input type="text" name="subjet" placeholder="asunto" onBlur={handlerBlur} onChange={handlerChange} value={form.subject} required />   
                {errors.subject && <p>{errors.subject}</p>}
                <br/>
                <textarea name="comments" cols="50" roe="50" onBlur={handlerBlur} onChange={handlerChange} value={form.comments} required></textarea>
                {errors.comments && <p>{errors.comments}</p>}
                <br/>
                <input type="submit"/>
            </form>
            <hr/>
        </div>

    )
}

export default Form2;
import { useAuth } from "../hookAuth/useAuth";

export const useValidate = () => {

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    const {getUsersToCompare, getPassToCompare} = useAuth()

    const validateForm = async (form) => {
        console.log(form)
        let _errors = {}
        if(form.name === ""){
            _errors.name  = 'Campo obligatorio.' ;
        }else if(!regexName.test(form.name)){
            _errors.name  = "El campo nombre solo acepta letras y espacios ";
        }
        //====================================

        if(form.lastName === ''){
            _errors.lastName = 'Campo obligatorio.';
        }else if(!regexName.test(form.lastName)){
            _errors.lastName= "El campo apellido solo acepta letras y espacios ";
        }
        //====================================
        if(form.email === ''){
            _errors.email= 'Campo obligatorio.';
        }else if(!regexEmail.test(form.email)){
            _errors.email = "email incorrecto";
        }
        //====================================
        if(form.password === '' ){
            _errors.pass = 'Campo obligatorio.';
        }else if(form.password.length < 10){
            _errors.pass = "la contraseña debe contener más de 10 caracteres";
        }    
        //====================================
        if(form.role === "" ){
            _errors.role = 'Campo obligatorio.';
        }
        //====================================
        if(!(await getUsersToCompare(form.email)).result){
            _errors.user = "email ya registrado";
        }
        console.log(_errors)
        return _errors;
    }

    const validateLogin = async (form) => {

        let _errors = {}
    
        //====================================
        if(form.email === ''){
          _errors.email= 'Campo obligatorio.';
        }else if(!regexEmail.test(form.email)){
          _errors.email = "email incorrecto";
        }else if((await getUsersToCompare(form.email)).result){
          _errors.email = "email no registrado";
    
        }
        //====================================
        if( form.password === '' ){
            _errors.pass = 'Campo obligatorio.';
        }else if(await getPassToCompare(form.password)){
            _errors.pass = "contraseña incorrecta";
        }
    
        return _errors;
      }

    return {
        validateForm,
        validateLogin
    }
}
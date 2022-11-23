import { useContext } from 'react';
import RequestProducts from '../../contexts/requestsContext/requestProdContext';

export const useAuth = () => {

    const {listUser} = useContext(RequestProducts);

    const getPassToCompare = (pass) => {
            
        let aux = listUser.filter((item) => item.password === pass ).length
        let result = aux === 0 ? true : false
        return result;
    }

    const getUsersToCompare = (email) => {

        let aux = listUser.filter((item) => item.email === email )
        let result = aux.length === 0 ? true : false
        let uid = result ? null : aux[0].id

        return{
            result,
            uid
        } 
    }

    return {
        getUsersToCompare,
        getPassToCompare
    }
        
}


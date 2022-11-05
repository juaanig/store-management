import { useState, createContext } from "react";

const ProductContext = createContext();


const ProductProvider = ({children}) => {

    const [updateProducts,setUpdateProducts] = useState(false);
    const [updateNotes, setUpdateNotes] = useState(false)
    const[modifyProduct, setModifyProduct] =useState({
        productName:'',
        price:'',
        amount: '',
        elaborationDate:'',
        expirationDate:'',
        expiration:'',
        id:''
    });
    const [loadButton, setLoadButton] = useState(true)
    const [modifyButton, setModifyButton] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [clean, setClean] =useState(false)

    return(
        <ProductContext.Provider value={{updateProducts,setUpdateProducts, updateNotes, setUpdateNotes, modifyProduct, setModifyProduct, loadButton, setLoadButton, modifyButton, setModifyButton, showForm, setShowForm, clean, setClean}}>
            {children}
        </ProductContext.Provider>
    )


}

export {ProductProvider};
export default ProductContext;
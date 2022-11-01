import { useState, createContext } from "react";

const ProductContext = createContext();


const ProductProvider = ({children}) => {

    const [updateProducts,setUpdateProducts] = useState(false);
    const [updateNotes, setUpdateNotes] = useState(false)

    return(
        <ProductContext.Provider value={{updateProducts,setUpdateProducts, updateNotes, setUpdateNotes}}>
            {children}
        </ProductContext.Provider>
    )


}

export {ProductProvider};
export default ProductContext;
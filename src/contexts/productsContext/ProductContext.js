import { useState, createContext } from "react";

const ProductContext = createContext();


const ProductProvider = ({children}) => {

    const [update,setUpdate] = useState(false);

    return(
        <ProductContext.Provider value={{update,setUpdate}}>
            {children}
        </ProductContext.Provider>
    )


}

export {ProductProvider};
export default ProductContext;
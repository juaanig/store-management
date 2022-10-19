import { useState,createContext} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    
    const [theme,setTheme] = useState("light")

    const setThemeHandler = (arg) => {
        setTheme(arg)
        console.log(theme)
    }

    return (
        <ThemeContext.Provider value={{setThemeHandler,theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;
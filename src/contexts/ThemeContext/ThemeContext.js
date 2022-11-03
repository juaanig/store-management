import { useState,createContext} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const localTheme = () => {
        let localThemeStorage = localStorage.getItem("THEME");
        if (localThemeStorage === null) {
          localStorage.setItem("THEME", "light theme");
          return "light theme";
        } else {
          return localThemeStorage;
        }
    };
    
    const [theme,setTheme] = useState(localTheme())

    const setThemeHandler = (arg) => {
        localStorage.setItem("THEME",arg)
        setTheme(arg)
    }

    return (
        <ThemeContext.Provider value={{setThemeHandler,theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;
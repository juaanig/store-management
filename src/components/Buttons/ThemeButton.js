import React from 'react'
import {useContext, useState} from 'react'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import {Button} from "react-bootstrap"

const ThemeButton = () => {

    const {setThemeHandler, localTheme} = useContext(ThemeContext)
    const [themeButton, setThemeButton] = useState(localTheme())

    const changeThemeHandler = () => {
      if (localTheme() === "light theme") {
        setThemeButton("light theme")
        setThemeHandler("dark theme")
        
      } else {
        setThemeButton("dark theme")
        setThemeHandler("light theme")
      } 
    }

    const buttonThemeHandler = () =>{
        if (localTheme() === "light theme") {
          setThemeHandler("dark theme")
          return "light theme"
        } else {
          setThemeHandler("light theme")
          return "dark theme"
        } 
    }

  return (
    <>
      <Button className={"me-2 btn btn-"+themeButton} xs={8}
        onClick={changeThemeHandler}>
        {buttonThemeHandler()}
      </Button>
    </>
  )
}

export default ThemeButton
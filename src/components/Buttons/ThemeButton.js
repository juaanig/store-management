import React from 'react'
import {useContext, useState} from 'react'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import {Button} from "react-bootstrap"

const ThemeButton = () => {

  const {setThemeHandler,theme} = useContext(ThemeContext)
  const [themeButton, setThemeButton] = useState(theme === "light theme" ? "dark theme" : "light theme")


  const changeThemeHandler = () => {
    if (theme === "light theme") {
      setThemeButton("light theme")
      setThemeHandler("dark theme")
      
    } else {
      setThemeButton("dark theme")
      setThemeHandler("light theme")
    } 
  }

  return (
    <>
      <Button className={"me-2 btn btn-"+themeButton} xs={8}
        onClick={changeThemeHandler}>
        {theme === "light theme" ? "dark theme" : "light theme"}
      </Button>
    </>
  )
}

export default ThemeButton
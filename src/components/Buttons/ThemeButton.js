import React from 'react'
import {useContext, useState} from 'react'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import {Button} from "react-bootstrap"

const ThemeButton = () => {

    const {theme, setThemeHandler} = useContext(ThemeContext)
    const [themeButton, setThemeButton] = useState("dark theme")

    const changeThemeHandler = () => {
      if (theme === "light theme") {
        setThemeHandler("dark theme")
        setThemeButton("light theme")
      } else {
        setThemeHandler("light theme")
        setThemeButton("dark theme")
      } 
    }

  return (
    <>
      <Button className={"me-2 btn btn-"+themeButton} xs={8}
        onClick={changeThemeHandler}>
        {themeButton}
      </Button>
    </>
  )
}

export default ThemeButton
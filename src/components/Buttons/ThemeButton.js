import React from 'react'
import {useContext, useState} from 'react'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import {Button} from "react-bootstrap"

const ThemeButton = () => {

    const {theme, setThemeHandler} = useContext(ThemeContext)
    const [themeButton, setThemeButton] = useState("dark")

    const changeThemeHandler = () => {
      if (theme === "light") {
        setThemeHandler("dark")
        setThemeButton("light")
      } else {
        setThemeHandler("light")
        setThemeButton("dark")
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
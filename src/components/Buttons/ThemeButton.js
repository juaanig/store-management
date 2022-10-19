import React from 'react'
import {useContext} from 'react'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import {Container, Form} from "react-bootstrap"

const ThemeButton = () => {

    const {theme,setThemeHandler} = useContext(ThemeContext)

    const changeThemeHandler = () => {
        theme === "light" ? setThemeHandler("dark") : setThemeHandler("light")
    }

  return (
    <Container className='m-auto'>
        <Form.Group className='mt-2'>
            <Form.Check className='form-check form-check-inline form-switch' type='checkbox' onClick={changeThemeHandler} size="sm"/>
        </Form.Group>
    </Container>
  )
}

export default ThemeButton
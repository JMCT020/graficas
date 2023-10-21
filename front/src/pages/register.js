import React, { useState } from "react";
import Input from "../components/imput";
import Calendar from "../components/calendar";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { Typography } from "@mui/material";
import "./styles.css"


const Register = () => {
    const [formData, setFormData] = useState()
    const navigate = useNavigate()
    const register = async () => {
        await fetch("http://localhost:5000/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
    }

    return(
        <div className="container">
            <div className="login">
            <Typography variant="h2">
            Registrarse
            </Typography>
            <Input label="Nombre" onChange={(e) => setFormData({...formData, name: e})}></Input>
            <Input label="Apellido" onChange={(e) => setFormData({...formData, lastname: e})}></Input>
            <Calendar label="Fecha de nacimiento" onChange={(e) => setFormData({...formData, birthdate: e})} ></Calendar>
            <Input label="Usuario" onChange={(e) => setFormData({...formData, user: e})}></Input>
            <Input label="Contraseña" onChange={(e) => setFormData({...formData, password: e})} type="password"></Input>
            <Button variant="contained" onClick={() => register()}>Registrarse</Button>
            <Button variant="text" onClick={() => navigate("/")}>volver</Button>
            </div>
        </div>
    )
}

export default Register
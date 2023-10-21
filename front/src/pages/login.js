import { Typography } from "@mui/material";
import Button from "../components/button";
import Input from "../components/imput";
import "./styles.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState()
    const navigate = useNavigate()
    const login = async () => {
        await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))}


  return (
    <div className="container">
        <div className="login">
        <Typography variant="h2">
            Login
        </Typography>
        <Input label="Usuario" onChange={(e) => setFormData({...formData, user: e})}></Input>
        <Input label="Contraseña" onChange={(e) => setFormData({...formData, password: e})} type="password"></Input>
        <Button variant="contained" onClick={() => login()}>Ingresar</Button>
        <Button variant="text" onClick={() => navigate("/register")}>Registrarse</Button>
        </div>
    </div>
  );
}

export default Login;

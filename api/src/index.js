
import express from 'express';
import login from './controllers/login.js';
import register from './controllers/register.js';
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const datos = req.body; 
    const loginRes = login(datos, res)
    if(loginRes){
        return loginRes
    }else{
        res.send({
            message: 'no logeado',
            status: 400
        }); 
    }

});

app.post('/register', (req, res) => {
    const datos = req.body; 
    const registerRes = register(datos, res)
    if(registerRes){
        res.send({
            message: 'registrado',
            status: 200
        }); 
    }else{
        res.send({
            message: 'no registrado',
            status: 400
        }); 
    }

});

app.get('/api/datos', (req, res) => {
    const datos = { nombre: 'John Doe', edad: 30 };
    res.json(datos);
  });

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
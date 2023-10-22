import db from "../database/index.js"
import { checkUserExists } from './tu_ruta_al_controlador';


const register = async (data, res) => {
    try{
      const userExists = await checkUserExists(data.user);

      if(userExists)
      {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }
    db.query(`
        INSERT INTO usuarios (name, lastname, birthdate, user, password)
        VALUES ("${data.name}","${data.lastname}", "${data.birthdate}","${data.user}","${data.password}")`, (error, results) => {
        if (error) {
          console.error('Error al ejecutar la consulta: ', error);
          res.status(500).send('Error interno del servidor');
          return;
        }
        return res.json(results);
      });
    }catch(error){
      console.error('Error: ', error)
      res.status(500).send('Error interno del servidor');
    }
}

export default register


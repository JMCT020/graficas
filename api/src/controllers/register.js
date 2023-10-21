
import db from "../database/index.js"
const register = async (data, res) => {
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
}

export default register


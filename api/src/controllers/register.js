import db from "../database/index.js"

const register = async (data, res) => {
  const { name, lastname, birthdate, user, password } = data;
    db.query(`
    SELECT * FROM usuarios WHERE user = ?`, 
    [user], 
    (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta: ', error);
        res.status(500).send('Error interno del servidor');
        return;
      }
      
      if (results.length > 0) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      } else {
        db.query(`
        INSERT INTO usuarios (name, lastname, birthdate, user, password)
        VALUES ("${name}","${lastname}", "${birthdate}","${user}","${password}")`, (error, results) => {
        if (error) {
          console.error('Error al ejecutar la consulta: ', error);
          res.status(500).send('Error interno del servidor');
          return;
        }
        return res.json(results);
      });
    }
  }
  )
}

export default register


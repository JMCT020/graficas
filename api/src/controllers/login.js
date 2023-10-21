
import db from "../database/index.js"
const login = async (data, res) => {
    const resLogin = await db.query(`SELECT * FROM usuarios WHERE user = "${data.user}" AND password = "${data.password}"`, (error, results) => {
        if (error) {
          console.error('Error al ejecutar la consulta: ', error);
          res.status(500).send('Error interno del servidor');
          return;
        }
        return res.json(results);
      });
    return resLogin
}

export default login


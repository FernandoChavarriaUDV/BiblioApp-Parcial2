import app from './app';
import { sequelize } from './infrastructure/database/sequelize';

async function start() {
  try {
    await sequelize.authenticate();
    console.log('BD conectada');

    app.listen(3000, () => {
      console.log('Servidor en http://localhost:3000');
    });
  } catch (error) {
    console.error(error);
  }
}

start();
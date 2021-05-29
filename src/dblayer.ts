const { ipcMain } = require('electron');

const dontenv = require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 5,
  database: process.env.DB_NAME,
});

// Event handler for asynchronous incoming messages
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg);

  // Event emitter for sending asynchronous messages
  event.sender.send('asynchronous-reply', 'async pong');
});

// Event handler for synchronous incoming messages
ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg);

  // Synchronous event emmision
  event.returnValue = 'sync pong';
});

async function addTask(task) {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      `INSERT INTO Tasks (name, description) values ('${task.name}', '${task.description}')`
    );
    console.log(res);
  } catch (err) {
    console.log('There was an error.');
    throw err;
  }
}

ipcMain.on('add-task', (event, arg) => {
  addTask(arg);
  event.sender.send('add-task', 'task added');
});

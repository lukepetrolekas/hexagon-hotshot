import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.global.css';

import Navigation from './organisms/Nav';
import CreateTask from './pages/CreateTask';

require('dotenv').config();

import mariadb  from 'mariadb';

const pool = mariadb.createPool({
     host: process.env.DB_HOST,
     user:process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     connectionLimit: 5
});

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	//console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

asyncFunction()

export default function App() {
  return (
    <Container fluid>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" component={CreateTask} />
        </Switch>
      </Router>
    </Container>
  );
}

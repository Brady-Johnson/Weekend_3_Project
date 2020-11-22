const { Router } = require('express');
const express = require('express');
const toDoRouter = express.Router();
const pool = require('../modules/pool');


//GET
toDoRouter.get('/', (req, res) =>{
    let queryText = 'SELECT * FROM todolist ORDER BY id;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting books', error);
            res.sendStatus(500);
    });
});// end GET

//POST

//PUT

//DELETE

module.exports = toDoRouter;
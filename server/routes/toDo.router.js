const { Router } = require('express');
const express = require('express');
const toDoRouter = express.Router();
const pool = require('../modules/pool');


//GET
toDoRouter.get('/', (req, res) =>{
    console.log('toDoRouter GET');
    let queryText = 'SELECT * FROM todolist ORDER BY id;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error toDoList, error');
            res.sendStatus(500);
    });
})// end GET

//POST
toDoRouter.post('/', (req, res) => {
    let todoItem = req.body;
    console.log('Adding toDo: ', todoItem);

    let queryText = `INSERT INTO "todolist" ( "username", "todo", "complete" ) 
        VALUES($1, $2, $3);`;
    pool.query(queryText, [ 'default', todoItem.todo, false])
    .then(result => {
    res.sendStatus(201);
    })
    .catch(error => {
    console.log(`Error adding new thing to ToDo List`, error);
    res.sendStatus(500);
    });
})// end POST

//PUT

//DELETE
toDoRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Delete route called with id of ', id);
   
    let queryText = `DELETE FROM todolist WHERE id=$1;`;
    pool.query(queryText, [id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error deleting treat`, error);
      res.sendStatus(500);
    });

});

module.exports = toDoRouter;
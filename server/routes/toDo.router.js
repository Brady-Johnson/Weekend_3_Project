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
toDoRouter.put('/:id', (req, res) =>{
    let todo = req.body;
    let id = req.params.id;
    console.log(`updating todo list ${id} with ${todo}`);

    let sqlText = `UPDATE "todolist" SET complete=$1 WHERE id=$2;`;
    pool.query(sqlText, [true, id] )
    .then((result) => {
        res.send(200);
    }).catch( (error) => {
       console.log('Error from edit: ', error);
       res.sendStatus(500); 
   });
})//end PUT

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
}); // end DELETE

module.exports = toDoRouter;
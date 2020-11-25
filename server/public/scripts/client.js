console.log('JS');

$(document).ready(function(){
    console.log('JQ');
    setupClickListeners();
    getToDo();
})//end ready

function setupClickListeners() {
    $('#submit').on('click', handleSubmit );
    $('#listOut').on('click', '.deleteButton', deleteButton );   
    $('#listOut').on('click', '.completeButton', completeButton) 
}; // End setupClickListeners

function handleSubmit() {  
    let todo = {};
    todo.todo = $('#toDoIntake').val();
    addToDo(todo)
}

    function addToDo(todo) {
    $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        }).then(function(response) {
          console.log('Response from server.', response);
          getToDo()
        }).catch(function(error) {
          console.log('Error in POST', error)
          alert('Unable to add TODO at this time. Please try again later.');
        });
}; //end addToDo

function getToDo(){
    console.log('got this far');
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function (response) {      
        renderToDoList(response);        
    }).catch(function (error){
        console.log('erro in GET', error);        
    });
}; // end getToDo

function renderToDoList(todo){
    
    $('#listOut').empty();
    
    for ( let i = 0; i < todo.length; i++ ) {
        let todoList = todo[i];   
        let $tr = $('<tr></tr>');
        $tr.data('tod', todoList.id);
        $tr.append(`<td>${todoList.todo}</td>`);
        $tr.append(`<td><button class="deleteButton">DELETE</button></td>`);
        if(todoList.complete === false){
            $tr.append(`<td><button class="completeButton">Complete</button></td>`);
        }
        $('#listOut').append($tr);
    }
} // end renderToDoList


function deleteButton() {    
    let listDelete = $(this).closest('tr').data().tod;
    console.log(listDelete);  
    
    $.ajax({
        type: 'DELETE',
        url: `/todo/${listDelete}`
      }).then(function(response) {
        console.log(response);
        getToDo();
      }).catch(function(error){
        console.log('error in GET', error);
      });
} //end deleteButton

function completeButton() {
    let listUpdate = $(this).closest('tr').data().tod;
    console.log(listUpdate);  
    
    $.ajax({
        type: 'PUT',
        url: `/todo/${listUpdate}`
      }).then(function(response) {
        console.log(response);
        getToDo();
      }).catch(function(error){
        console.log('error in GET', error);
      });
}
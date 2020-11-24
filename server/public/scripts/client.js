console.log('JS');

$(document).ready(function(){
    console.log('JQ');
    setupClickListeners();
    getToDo();
})//end ready

function setupClickListeners() {
    $('#submit').on('click', addToDo );
    $('#listOut').on('click', '.deleteButton', deleteButton );
    
}; // End setupClickListeners

function addToDo() {
    console.log('InAddToDo, listner is working');
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
    console.log(todo);
    
    $('#listOut').empty();
    
    for ( let i = 0; i < todo.length; i++ ) {
        let todoList = todo[i];   
        let $tr = $('<tr></tr>');
        $tr.data('todo', todo);
        $tr.append(`<td>${todoList.todo}</td>`);
        $tr.append(`<td><button class="deleteButton">DELETE</button></td>`);
        $('#listOut').append($tr);
    }
    
} // end renderToDoList

function deleteButton() {    
    let listDelete = $(this).closest('tr').data();
    console.log(listDelete.todo);
    
    
}


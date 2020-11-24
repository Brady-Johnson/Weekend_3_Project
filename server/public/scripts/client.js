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
    
    $('#listOut').empty();
    
    for ( let i = 0; i < todo.length; i++ ) {
        let todoList = todo[i];   
         console.log(todoList.todo);
        
        
         $('#listOut').append(`<tr>
                                        <td>${todoList.todo}</td>
                                        <td><button class='deleteButton'>DELETE</button></td>
                                </tr>`);                                    
    }
} // end renderToDoList

function deleteButton() {
    let listDelete = $('this').closest('tr').data();
    console.log(listDelete);
    
    
}


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
        console.log('response from server: ', response );
        
        console.log(response);
        renderToDoList(response);        
    }).catch(function (error){
        console.log('erro in GET', error);        
    });
}; // end getToDo

function renderToDoList(todoList){
    
    $('#listOut').empty();
    for(let i = 0; i < todoList.length; i++ ){
        let $tr = $('<tr></tr>');
        $tr.data('todoList', todoList);
        $tr.append(`<td>${todoList.todo}</tr>`);
        $tr.append(`<button class='deleteButton'>DELETE</button>`);
    }
    
} // end renderToDoList

function deleteButton() {
    console.log('clicking the Delete button works');
    
}


console.log('JS');

$(document).ready(function(){
    console.log('JQ');
    setupClickListeners();
    getToDo();
})//end ready

function setupClickListeners() {
    $('#submit').on('click', addToDo );
    
}; // End setupClickListeners

function addToDo() {
    console.log('InAddToDo, listner is working');
}; //end addToDo

function getToDo(){
    $.ajax({
        type: GET,
        url: '/todo'
    }).then(function (response) {
        console.log(response);
        renderToDoList();        
    }).catch(function (error){
        console.log('erro in GET', error);        
    });
}; // end getToDo

function renderToDoList(){
    console.log('in renderToDoList');
    
}


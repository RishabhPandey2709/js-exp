let todoList = [
    { title : "dummy1" , isDone : false },
    { title:"dummy2", isDone: false},
    { title:"dummy3",isDone:false}
];


function print() {
    for(i=0;i<todoList.length;i++){
        document.write(todoList[i].title);
    }
}


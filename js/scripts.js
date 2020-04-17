function ToDoList(name,date,description){
    this.activityName=name;
    this.dueDate=date;
    this.description=description;
}

$(document).ready(function(){
    $("form#myForm").submit(function(event){
        event.preventDefault();
        var name=$("#name").val();
        var date=$("#date").val();
        var description=$("#description").val();
        var myToDoList=new ToDoList(name,date,description);
        $("ul#list").append("<li class='listItem' id="+myToDoList.activityName+">"+myToDoList.activityName+"</li>");
        $(".listItem").last().click(function(){
            $(".showToDo").show();
            $(".showToDo h2").text(myToDoList.activityName);
            $(".dueDate").text(myToDoList.dueDate);
            $(".description").text(myToDoList.description);
            $(".remove").text("Remove");            
        });
        $("form#myForm").trigger("reset");
    });
});
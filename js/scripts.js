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
        var nameString=nameAsID(name);
        var myToDoList=new ToDoList(name,date,description);
        $("ul#list").append("<li class='listItem' id="+nameString+">"+myToDoList.activityName+"</li>");
        $(".listItem").last().click(function(){
            $(".showToDo").children().remove();
            $(".showToDo").append('<div class="thisActivity">'+
                                        '<h2>'+myToDoList.activityName+'</h2>'+
                                        '<p><strong>Due Date: </strong>'+myToDoList.dueDate+'</p>'+
                                        '<p><strong>Description: </strong>'+myToDoList.description+'</p><br>'+
                                        '<button id="done" type="button" class="btn btn-warning">Completed</button>'+
                                    '</div>');
            $("#done").click(function(){
                $(this).parentsUntil(".showToDo").remove();
                $("#"+nameString).remove();
                $(".completed").append('<span>'+myToDoList.activityName+'</span><br>');
                $("button.clearTasks").show();
                $(".clearTasks").click(function(){
                    $(".completed").children().remove();
                    $("button.clearTasks").hide();
                });
            });                       
        });
        $("form#myForm").trigger("reset");
    });
});

function nameAsID(name){
    var strLength=name.length;
    var strArray=[];
    for(var x=0;x<strLength;x+=1){
        if(name.charAt(x)!==" "){
            strArray.push(name.charAt(x));
        }
    }
    var nameStr=strArray.join("");
    return nameStr;
}
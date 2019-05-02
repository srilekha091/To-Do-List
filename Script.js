var list;

$("#toDoList").submit(function(event){
	list = $("#toDo").val();
	var htmlCheckboxList = "<li><input type=\"checkbox\">" + "<label>" + list  + "</label></li>";

	$("#checkboxList").append(htmlCheckboxList);

	

	event.preventDefault();
})
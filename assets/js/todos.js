//cross off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete TODO:
$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	//if enter key is pressed
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear input field
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
//fade input field on + key press
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});

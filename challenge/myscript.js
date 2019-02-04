$(document).ready(function(){

for (i=1; i<8; i++) {
$("#shoppingcart").append("<div>"+i+"</div>");

$("#shoppingcart div:eq("+(i-1)+")").addClass("box");

}

	$(".container").submit(function(e) {

	e.preventDefault();
});



});
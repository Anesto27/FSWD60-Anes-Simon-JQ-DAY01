$(document).ready(function(){
	$("form").submit(function(e) {

	e.preventDefault();
});

// $("form").remove();
for (i=1; i<6; i++) {
$("article").append("<div>"+i+"</div>");
//$("article div:eq("+(i-1)+")").addClass("box"); //first solution//
$("article div:eq("+(i-1)+")").addClass("box");
}


$("input#msg").attr("value", "Search for ...");

<<<<<<< HEAD
$("a").attr("href", "https://www.codefactory.wien");
=======

>>>>>>> 16b4baa0372a01988a47e0751e295779b474b685

})


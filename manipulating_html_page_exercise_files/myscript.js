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


$("a").attr("href", "https://www.codefactory.wien");



})


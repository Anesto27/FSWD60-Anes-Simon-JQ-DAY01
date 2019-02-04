$(document).ready(function(){
	$("form").submit(function(e) {

	e.preventDefault();
});

// $("form").remove();
for (i=1; i<6; i++) {
$("article").append("<div>"+i+"</div>");
}

var n = "Search for ..."

$("input#msg").attr("value", "Search for ...");
})


//1
$("a[href]").attr("href","https://www.codefactory.wien" );
//2
$("code").css("color","red");
//3
$("ol>li").css("background-color","#2a7b90");
//4
$("form textarea").attr("placeholder","Express your opinion");
//5
$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
//6
$("blockquote").css({"background-color":"orange","font-style":"italic"});
//7
$("h1#logo").css("background-color","black");
$("span.gray").css("background-color","white");
//8
$("span.date").remove();
//9
var array = ["New Templates", "Order Template", "Contact us"];
for(i=0; i<array.length; i++) {
	$("ul.sidemenu").append("<li><a href='http://all-free-download.com/free-website-templates/'>"+array[i]+"</a></li>");
}
//10
$("#sidebar p:first").text('"When someone says: "I want a programming language in which I need only to say what I wish, and done", give him a lollipop."');


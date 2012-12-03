onload=function(){
	$("tr.content").hide();
}
function over(ele)
{
	ele.className+=" over";
}

function out(ele)
{
	ele.className=ele.className.replace(/\sover/,"");
}
function clicked(ele,num)
{
	$(ele).next().toggle();
}
onload=function(){
	$("#body").accordion({header:"tr.header",collapsible: true,animated:false,event:"mouseover"});
}
function over(ele)
{
	ele.className+=" over";
}

function out(ele)
{
	ele.className=ele.className.replace(/\sover/,"");
}

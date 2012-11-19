function over(ele)
{
	ele.className+=" over";
}

function out(ele)
{
	ele.className=ele.className.replace(/\sover/,"");
}

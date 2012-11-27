var text=[
"<h1>ubuntu彩蛋</h1><p>ubuntu在运行窗口中（按alt+f2打开）输入&quot;free the  fish&quot;会看到一个鱼的图标，下面是“unity中没有彩蛋”。输入&quot;gegls from outer space&quot;会看到“unity中真的没有彩蛋” 。 </p>"
,

"<h1>Meet Ubuntu</h1>Fast, free and incredibly easy to use, the Ubuntu operating system powers millions of desktop PCs, laptops and servers around the world. Ubuntu will work with your existing PC files, printers, cameras, music players and smartphones - and it comes with thousands of free apps.What is an operating system?An operating system is what makes your computer work, running all your programs and managing your hardware. Other examples include Microsoft Windows and Mac OS X.Why use Ubuntu?How does it compare to my system?With Ubuntu, you can do all the things you can do with other operating systems. But with Ubuntu you can do them faster, more securely and, of course, for free.Explore features How can it be free?Ubuntu is free and it always will be. That's because it's the work of open-source software experts from all over the world - people who believe software should be free."
];
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
	ele.innerHTML+=text[num];
	ele.className="inner block";
	ele.outerHTML+="<br />";
}
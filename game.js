	function play()
	{
		document.querySelector(".contain").style.display='none';
		document.querySelector(".container").style.display='block';
		//document.getElementById('c').style.display='block	';	
	}
		// setTimeout(() => {document.querySelector(".mouse").style.visibility='visible'},1000);
		// setTimeout(() => {document.querySelector(".mouse").style.visibility='hidden'},2000);
i=0;

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function display()
{
	
	var b=getCookie('name');
let random1=getRandomInt(5);
console.log(random1);
let img1=document.createElement('img');
img1.src="mouse.gif";
img1.style.height="120px";
img1.style.width="120px";
img1.classList.add="mouse1";
// img1.style.height="200px";
img1.alt="rat";
//img1.onclick="score()";
img1.addEventListener('click',function(){
i++;
if(i>b)
{
	
document.cookie="name="+i;	
document.getElementById('hscore').innerHTML=b;
}

document.getElementById('score').innerHTML=i;
});
document.querySelectorAll('.col')[random1].appendChild(img1);
setTimeout(function(){
document.querySelectorAll('.col')[random1].removeChild(img1);
display();
}, 1000);
}		
	function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}




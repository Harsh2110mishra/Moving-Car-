let countdownelement=document.getElementById("Count");
let bgimage=document.getElementById("bg-img");
console.log("scrpt loaded");

let initialcountdown=countdownelement.innerHTML;
function countdownstr(){
	initialcountdownval=initialcountdown > 0 ? initialcountdown-1 : 0;
	countdownelement.innerHTML= initialcountdownval;
	initialcountdown --; 
	let bgimg_chng= initialcountdownval % 2 === 0 ? "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80" : "https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&w=1000&q=80";

    bgimage.src=bgimg_chng;
if(initialcountdownval==0){
	window.location="Moving-Car.html";
}
}

setInterval(countdownstr,1000);


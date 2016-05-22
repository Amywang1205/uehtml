window.onload = function(){
	var aDay = document.getElementsByClassName('day')[0];
	var aHour = document.getElementsByClassName('hour')[0];
	var aMin = document.getElementsByClassName('min')[0];
	var aSec = document.getElementsByClassName('sec')[0];
	var iNow='';
	var iNew='';
	var t=0;
	var timer = '';	
	
	iNew = new Date(2016,7,9,00,00,00);
	timer = setInterval(fn,1000);
	fn();
	function fn(){
		iNow = new Date();					
		t = Math.floor((iNew-iNow)/1000);
		if (t>=0){
			aDay.innerHTML = toTwo(Math.floor(t/86400));
			aHour.innerHTML = toTwo(Math.floor(t%86400/3600));
			aMin.innerHTML = toTwo(Math.floor(t%86400%3600/60));
			aSec.innerHTML = toTwo(Math.floor(t%60));
		}else{
			clearInterval(timer);
		}
	}
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}
}
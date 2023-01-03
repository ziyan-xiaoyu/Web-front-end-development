window.onload=function(){
	var seat=document.getElementById("seat");
	var start=document.getElementById("start");
	var reset=document.getElementById("reset");
	var lucky=document.getElementById("lucky");
	var clear=document.getElementById("clear");
	var red=document.getElementById("red");
	var music=document.getElementById("music");
	var isOpera=true;
	var maxquestion=0;
	var timer;

	//音乐播放
	red.onmouseover=function(){
		music.style.display='block';
	}

	red.onmouseout=function(){
		music.style.display='none';
	}
    
    //开始
    start.onclick=function(){
		if (isOpera) {
			maxquestion+=1;
			if(maxquestion>=4)
				isOpera=true;
			if(maxquestion<=3)
			{
			  clearInterval(timer);
			  timer=setInterval(function()
			     {
				  show();
			     },50);

			start.innerHTML = "&nbsp;停止";
			start.style.backgroundColor = "#BD1B0A";
			start.style.borderColor = "#004490";
			isOpera = false;
		    }		
		} else {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;
			lucky.style.display = "block";
			clear.style.display = "block";

			if(maxquestion<=3)
			{
			var oDivs = document.createElement("div");
			oDivs.innerHTML = "第" + num + "题<span onclick='deleteDivs(this)'>-<span>";
			lucky.appendChild(oDivs);

			clearInterval(timer);
		    }
		}
	}

	//重置
	reset.onclick =function(){
		clearInterval(timer);
		if (!isOpera) {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;
		}
		seat.innerHTML = "00";
	}

	//清空
	clear.onclick = function(){
		clear.style.display = "none";
		lucky.style.display = "none";
		lucky.innerHTML = "";

		seat.innerHTML = "00";
		clearInterval(timer);
		if (!isOpera) {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;
		}
	}

	//随机数
	function show(){
		var seatNum = random(1,11);
		seatNum = doubleNum(seatNum);

		seat.innerHTML = seatNum;

		num = seatNum;
	}

	function doubleNum(num){
		if(num < 10) {
			num = "0" + num;
		}
		return num;
	}

	function random(lower,upper){
		return Math.floor(Math.random() * (upper - lower)) + lower;
	}
}
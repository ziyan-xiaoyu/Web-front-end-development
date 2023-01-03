
window.onload=function(){
	var seat=document.getElementById("seat");
	var start=document.getElementById("start");
	var reset=document.getElementById("reset");
	var lucky=document.getElementById("lucky");
	var clear=document.getElementById("clear");
	var red=document.getElementById("red");
	var music=document.getElementById("music");
	var isOpera=true;//确定抽题的开始与停止按钮
	var maxquestion=0;//最多一次抽取三道题
	var timer;
	var num;
	var a=new Array();//防重复数组
	for(var i=0;i<10;i++)
	{
		a[i]=0;
	}

	//音乐播放
	red.onmouseover=function(){
		music.style.display='block';
	}

	red.onmouseout=function(){
		music.style.display='none';
	}
    
    //开始抽题
    start.onclick=function(){
		if (isOpera) 
		{
			maxquestion+=1;
			if (maxquestion>=4) 
				{
				isOpera=true;
				window.alert("最多能够选择三道题哦！\n可以点击清空再来");
				}
			if (maxquestion<=3)
			 {
			clearInterval(timer);
			timer=setInterval(function(){
				show();
			},50);
			start.innerHTML = "&nbsp;停止";
			start.style.backgroundColor = "#BD1B0A";
			start.style.borderColor = "#004490";
			isOpera = false;
			}
		} 
		else {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;
			if(a[num-1]==0)
			{
			lucky.style.display = "block";
			clear.style.display = "block";
			//document.all("judge").innerHTML=num;
			var oDivs = document.createElement("div");
				oDivs.innerHTML = "第" + num + "题";
				//<span onclick='deleteDivs(this)'>-<span>";
				a[num-1]+=1;		
				lucky.appendChild(oDivs);
				//oDivs.appendChild(o1);//跳出卡片

				oDivs.onclick=function cardtoggle()
	            {
	            if(num==1)
	            {
		        const card1=document.getElementById('card1');
		        card1.classList.toggle('active')
		        }
	           else if(num==2)
	            {
		        const card2=document.getElementById('card2');
		        card2.classList.toggle('active')
		        }
	           else if(num==3)
	            {
		        const card3=document.getElementById('card3');
		        card3.classList.toggle('active')
		        }
	           else if(num==4)
	            {
		        const card4=document.getElementById('card4');
		        card4.classList.toggle('active')
		        }
	           else if(num==5)
	            {
		        const card5=document.getElementById('card5');
		        card5.classList.toggle('active')
		        }
	           else if(num==6)
	            {
		        const card6=document.getElementById('card6');
		        card6.classList.toggle('active')
		        }
	           else if(num==7)
	            {
		        const card7=document.getElementById('card7');
		        card7.classList.toggle('active')
		        }
	           else if(num==8)
	            {
		        const card8=document.getElementById('card8');
		        card8.classList.toggle('active')
		        }
	           else if(num==9)
	            {
		        const card9=document.getElementById('card9');
		        card9.classList.toggle('active')
		        }
	           else if(num==10)
	            {
		        const card10=document.getElementById('card10');
		        card10.classList.toggle('active')
		        }
		        
		    }
	            }
			else
			{
				window.alert("该题目已选择过，请再次点击开始");
				maxquestion-=1;
			}
			clearInterval(timer);
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
				maxquestion=0;
				for(var i=0;i<10;i++)
				a[i]=0;
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




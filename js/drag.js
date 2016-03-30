function getClassName(clsName,parent){
	var parent=parent?document.getElementById(parent):document;
	var eles=[];
	var elements=parent.getElementsByTagName('*');
	for(var i=0,l=elements.length;i<l;i++){
		if(elements[i].className==clsName){
			eles.push(elements[i]);
		}
	}
	return eles;
};
window.onload=function(){
	//实现拖拽效果
	var logo=getClassName('login_logo_webqq','loginPanel')[0],
		loginPanel=document.getElementById('loginPanel');
	logo.onmousedown=function(event){
		event=event||window.event;
		var divLeft=event.clientX-loginPanel.offsetLeft,
			divTop=event.clientY-loginPanel.offsetTop;
		document.onmousemove=function(event){
			var l=event.clientX-divLeft,
				t=event.clientY-divTop,
				winW=document.documentElement.clientWidth||document.body.clientWidth,
				winH=document.documentElement.clientHeight||document.body.clientHeight,
				maxW=winW-loginPanel.offsetWidth,
				maxH=winH-loginPanel.offsetHeight;
			if(l<0){
				l=0;
			}else if(l>maxW){
				l=maxW-10;
			}
			if(t<0){
				t=10
			}else if(t>maxH){
				t=maxH;
			}
			loginPanel.style.left=l+"px";
			loginPanel.style.top=t+"px";
		}
	}
	logo.onmouseup=function(){
		document.onmousemove=null;	
	}
	//关闭效果
	var boxyClose=document.getElementById('ui_boxyClose');
	boxyClose.onclick=function(){
		loginPanel.style.display='none';	
	}
	//版面切换状态效果
	var loginState=document.getElementById('loginState');
	var loginStatePanel=document.getElementById('loginStatePanel');
	var lis=loginStatePanel.getElementsByTagName('li');
	var stateTxt=document.getElementById('login2qq_state_txt');
	var loginStateShow=document.getElementById('loginStateShow');
	loginState.onclick=function(event){
		event=event||window.event;
		event.stopPropagation();
		loginStatePanel.style.display="block";
	}
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			this.style.background='#567';	
		}
		lis[i].onmouseout=function(){
			this.style.background='#fff';	
		}
		lis[i].onclick=function(event){
			var id=this.id;
			event=event||window.event;
			event.stopPropagation();
			loginStatePanel.style.display="none";
			stateTxt.innerHTML=getClassName('stateSelect_text',id)[0].innerHTML;
			loginStateShow.className='';
			loginStateShow.className='login-state-show '+id;
		}
	}
	document.onclick=function(){
		loginStatePanel.style.display="none";	
	}
}
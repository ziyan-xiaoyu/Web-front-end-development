window.navigator.online;

if (navigator.onLine) { 
    window.applicationCache.update();
} 
else { 
    function onlineCall() {
document.getElementById("hh1").onclick=function () {alert("您现在正处于离线状态！");};
}
}
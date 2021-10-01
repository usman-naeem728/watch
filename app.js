







var min = 00
var sec = 00
var msec = 00
var minhe = document.getElementById("min")
var seche = document.getElementById("sec")
var mseche = document.getElementById("msec")
var interval;

function timer(){
    msec++
    mseche.innerHTML = msec
    if(msec == 100){
        sec++
    seche.innerHTML ="0"+ sec
     msec = 00
    }else if(sec > 9){
    seche.innerHTML = sec    
    }
    else if(sec == 60){
        min++
    minhe.innerHTML = "0" + min
    sec = 00
    }else if (min > 9){
    minhe.innerHTML = min
    }
    
}


function start(){
interval =  setInterval(timer,10)
document.getElementById('sto').style.display='none';
document.getElementById('btn').style.marginLeft='10px'
}
function pause(){
clearInterval(interval) 
document.getElementById('sto').style.display='';
document.getElementById('btn').style.marginLeft=''
}
function reset(){
pause()
 min = "00"
 sec = "00"
 msec = "00"
 minhe.innerHTML = min
 seche.innerHTML = sec
 mseche.innerHTML = msec
}
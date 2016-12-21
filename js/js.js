function abrir(url) { 
open(url,'','top=10%,left=10%,width=500,height=200') ; 
} 


var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;
var g = 1.622;
var a = g.toFixed(2);
var dt1 = 0.016683;
var dt = dt1.toFixed(2);

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onkeyspace = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function pausa(){
	clearInterval(timer);
	clearInterval(v);
	clearInterval(y);
	stop();	
}

function reanudar(){
	clearInterval(timer);
	clearInterval(v);
	clearInterval(y);
	start();
}
	
function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=y.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<77){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
	}
}
function motorOn(){
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarAltura(); }, 100);
		document.getElementById("imagen").src="img/naveon.png";
}


function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
}

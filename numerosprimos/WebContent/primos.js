var txt = document.getElementById("numero").value;
function primos(){
	var primo;
	primo=true;
	for(var i=2; i<=txt-1; i++){
		if(txt%i==0){//txt%i significa el resto de la división
			primo=false;
			break;}}
	return primo; //devuelve el resultado de la funcion verdadera
}
if(primos(txt)){
	window.alert("El número es primo");}
else{
	window.alert("El número no es primo");}

//var cnt=0;
//function puntuacion(){
//	if(text!==primo){
//		alert('El juego ha terminado');
//		cnt=0;}
//	else{
//		alert('!BIEN HECHO! Has acertado');
//		cnt++;}
//	}

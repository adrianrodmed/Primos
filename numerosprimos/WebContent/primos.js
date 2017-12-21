var cnt = 0;
function primos(){
	var txt = parseInt(document.getElementById("numero").value);
	var primo = true;
	for(var i = 2; i <= Math.round(txt/2) && primo == true; i++){
		if(txt%i == 0){//txt%i significa el resto de la división
			primo=false;}
	if(primo){
		console.log("El número " + txt + " es primo.");
		cnt++;}
	else{
		window.alert("El número " + txt + " no es primo, tu puntuación es: "+ cnt + ".");
		cnt = 0;}
	}
}
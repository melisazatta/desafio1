function promedio(){
   
	let parcial = parseFloat(prompt("Ingrese nota parcial"));
	let final = parseFloat(prompt("Ingrese nota final"));
	let promedio = (parcial+final)/2;

	if(promedio >= 7){
		return alert("El promedio es "+promedio+" APROBADO");
	}else if(promedio <= 6){
		return alert("El promedio es "+promedio+" DESAPROBADO");
	}else{
        return alert("Debe ingresar ambas notas")}
} promedio()



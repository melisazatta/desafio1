function promedio(){

   //Pide al usuario que ingrese nota parcial y nota final

	let parcial = parseFloat(prompt("Ingrese nota parcial"));
	let final = parseFloat(prompt("Ingrese nota final"));

	//Calcula promedio de ambas notas

	let promedio = (parcial+final)/2;

    //Si el promedio es mayor o igual a 7 devuelve Aprobado

	if(promedio >= 7){
		return alert("El promedio es "+promedio+" APROBADO");

    //Si es menor o igual a 6 devuelve Desaprobado

	}else if(promedio <= 6){
		return alert("El promedio es "+promedio+" DESAPROBADO");

	//Si el usuario no ingresa nada devuelve un mensaje
	
	}else{
        return alert("Debe ingresar ambas notas")}
} promedio()



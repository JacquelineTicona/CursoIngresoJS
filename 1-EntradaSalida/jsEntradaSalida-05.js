/*
Jacqueline Ticona Quispe DIV E
ejercicio 5 e/s
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaramos las variables 
	var nombre;
	var edad;

	//solicitamos los valores por la caja de texto 

	nombre=document.getElementById("txtIdNombre").value;
 	edad=document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
}
/*
txtIdNombre
txtIdEdad
*/

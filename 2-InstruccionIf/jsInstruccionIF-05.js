/*
Jacqueline Ticona Quispe DIV E
ejercicio if 5
Al ingresar una edad solo debemos 
informar si la persona NO es adolescente.
*/
function mostrar()
{
	//declaramos la variable 

	var edad;

	//tomamos el valor por Id y lo parsemos 

	edad=parseInt(document.getElementById("txtIdEdad").value);  
	
	//desarrollamos 
	//si edad es menor a 13 o edad es mayor a 17
	//condicion que es verdadera para los valores de edad que estan 
	//por debajo o por encima del rango 13-17
	if(edad < 13 || edad >17)
	{
		alert("No es adolescente.")
	}

}//FIN DE LA FUNCIÓN
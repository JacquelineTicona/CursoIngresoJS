/*
Jacqueline Ticona Quispe DIV E
ejercicio if 3
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{
	//declaramos las variables 

	var edad;

	//tomamos el valor por ID y lo parseamos 

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad >=18)
	{
		alert("Es mayor de edad.");
	}  
	else{

		alert("No es menor de edad.");
	}
	

}//FIN DE LA FUNCIÓN
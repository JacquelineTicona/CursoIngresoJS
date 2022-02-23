/*
Jacqueline Ticona Quispe DIV E
ejercicio if 2
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	//declaramos las variables 
	var edad;

	//tomamos el valor por ID y lo parseamos

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17)
	{
		alert("Es mayor de edad.");
	}
	
}//FIN DE LA FUNCIÓN
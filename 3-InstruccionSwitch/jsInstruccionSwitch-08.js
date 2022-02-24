/*
Jacqueline Ticona Quispe DIV E
ejercicio switch 8
Al seleccionar un destino informar si hace 
FRIO o CALOR en ese destino
*/
function mostrar()
{
	//declaramos las variables 

	var destino;

	//tomamos el valor por ID 

	destino=document.getElementById("txtIdDestino").value;
	
	//desarrollamos 

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio.");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor.");
			break;
	}

}//FIN DE LA FUNCIÓN
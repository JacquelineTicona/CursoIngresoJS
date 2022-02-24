/*
Jacqueline Ticona Quispe DIV E
ejercicio switch 7
Al selecionar un destino , indicar el punto cardinal 
de nuestro pais en donde se encuentra Norte, Sur, Este u 
Oeste
*/
function mostrar()
{
	//declaramos las variables 

	var destino;

	//tomamos el valor por ID

	destino=document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Norte");
			break;

		case "Mar del plata":
			alert("Este");
			break;

		case "Ushuaia":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN
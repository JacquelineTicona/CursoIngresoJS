/*
Jacqueline Ticona Quispe DIV E
ejercicio switch 5
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana."
*/
function mostrar()
{
	//declaramos las variables 

	var hora;

	//tomamos el valor po ID y parseamos 

	hora=parseInt(document.getElementById("txtIdHora").value);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
	}

}//FIN DE LA FUNCIÓN
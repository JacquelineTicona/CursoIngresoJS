/*
Jacqueline Ticona Quispe DIV E
ejercicio swith 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//declaramos la variable 

	var mes;

	//tomamos el valor por Id

	mes = document.getElementById("txtIdMes").value;

	//desarrollamos 

	switch(mes)
	{
	case "Febrero":
		alert("Este mes tiene 28 días.");
		break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Nobiembre":
		alert("Este mes tiene 30 días.");
		break;
	//como tenemos una caja de texto podemos mandr por default 
	default:
		alert("Este mes tiene 31 días.");
	}

}//FIN DE LA FUNCIÓN
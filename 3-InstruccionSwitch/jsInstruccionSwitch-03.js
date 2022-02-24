/*
Jacqueline Ticona Quispe DIV E
ejercicio switch 3
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
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
		alert("Este mes no tiene más de 29 días.");
		break;

	default:
		alert("Este mes tiene 30 o más días.");
	}

}//FIN DE LA FUNCIÓN
/*
Jacqueline Ticona Quispe DIV E
ejercicio switch 2
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	//declaramos la variable 
	var mes;

	//tomamos el valor por ID

	mes =document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			alert("Falta para el invierno.");
			break;

		case "Febrero":
			alert("Falta para el invierno.");
			break;

		case "Marzo":
			alert("Falta para el invierno.");
			break;

		case "Abril":
			alert("Falta para el invierno.");
			break;

		case "Mayo":
			alert("Falta para el invierno.");
			break;

		case "Junio":
			alert("Falta para el invierno.");
			break;

		case "Julio":
			alert("Abrigate que hace frio.");
			break;

		case "Agosto":
			alert("Abrigate hace frio.");
			break;

		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
			
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
			
		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
			
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}

}//FIN DE LA FUNCIÓN
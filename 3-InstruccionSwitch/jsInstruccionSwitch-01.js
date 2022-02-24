/*
Jacqueline Ticona Quispe DIV E
ejercicio 1 switch
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//decalro las variables 

	var mes;

	//tomamos el valor por ID

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;

		case "Marzo":
			alert("a clases!!!.");
			break;

		case "Julio":
			alert("Se viene las vacaciones!!!.");
			break;

		case "Diciembre":
			alert("Felices fiestas!!!.");
			break;
	}
	
}//FIN DE LA FUNCIÓN
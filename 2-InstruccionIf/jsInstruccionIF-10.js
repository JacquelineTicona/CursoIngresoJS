/*
Jacqueline Ticona Quispe DIV E
ejercicio if 10 
Al presionar el Botón, asignar una nota 
RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas 
menores a 4
*/
function mostrar()
{
	//declaramos las variables 
	var nota;
	var maximo = 10;
	var minimo =1;

	//Genero el número RANDOM entre 1 y 10 

	 nota = Math.round(Math.random() * 9 + 1);
	
	//desarrollamos 
	if(nota >= 9)
	{
		alert("EXELENTE " + nota);
	}
	else if( nota > 4)
	{
		alert("APROBO " + nota);
	}
	else
	{
		alert("Vamos, la proxima se puede " + nota);
	}


}//FIN DE LA FUNCIÓN
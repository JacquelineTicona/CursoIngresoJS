/*
Jacqueline Ticona Quispe DIV E
ejercicio if 9
Al presionar el Botón, mostrar un número 
Random del 1 al 10 inclusive
*/
function mostrar()
{
	//declaramos las variables 
	 var numero;
	 var maximo = 10;
	 var minimo = 1;

	//generamos el numero random del 1 al 10

	 numero = Math.round(Math.random() * 9 + 1);


	alert(numero);	

}//FIN DE LA FUNCIÓN
/*
Math.round()
*/
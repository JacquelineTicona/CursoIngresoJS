/*
Jacqueline Ticona Quispe DIV E
ejercicio 9 e/s
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaramos las variables 

	var sueldo;
	var resultado;
	var aumento;

	//tomamos los importes por ID

	sueldo=document.getElementById("txtIdSueldo").value;
 	resultado=document.getElementById("txtIdResultado").value;

 	//transformamos los numeros a enteros po (parseInt)

 	sueldo=parseInt(sueldo);
 	resultado=parseInt(resultado);

 	//realizamos la operacion para calcular el nuevo sueldo le aumentamos el 10%

 	aumento = sueldo * 10 / 100;
 	resultado = sueldo + aumento;

	alert("El sueldo es: " + resultado);
}

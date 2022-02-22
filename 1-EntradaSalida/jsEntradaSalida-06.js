/*
Jacqueline Ticona Quispe DIV E
ejercicio 6 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos las variables 

	var numeroUno;
	var numeroDos;
	var resultado;

	//solicitamos los valores por el Id

	numeroUno=document.getElementById("txtIdNumeroUno").value;
 	numeroDos=document.getElementById("txtIdNumeroDos").value;

 	//transformamos los numeros en enteros con (parseInt)

 	numeroUno = parseInt(numeroUno);
 	numeroDos = parseInt(numeroDos);

 	//sumamos los datos de las variables 

 	resultado = numeroUno + numeroDos;

	alert("La suma es: " + resultado);
}
/*
txtIdNumeroUno
txtIdNumeroDos

Operadores basicos
suma +
resta -
multipicacion *
divicion / 
resto %
*/


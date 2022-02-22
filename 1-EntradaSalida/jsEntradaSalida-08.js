/*
Jacqueline Ticona Quispe DIV E
ejercicio 8 e/s
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaramos las variables 
	var numeroUno;
	var numeroDos;
	var resultado;

	//tomamos los numeros por Id

	numeroUno=document.getElementById("txtIdNumeroDividendo").value;
 	numeroDos=document.getElementById("txtIdNumeroDivisor").value;

 	//tranformamos los numero en enteros (parseInt)

 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);

 	//realizamos la operacion 

 	resultado = numeroUno % numeroDos;

	alert("El resto es: " + resultado);
}
/*
txtIdNumeroDividendo
txtIdNumeroDivisor
*/

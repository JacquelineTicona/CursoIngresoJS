/*
Jacqueline Ticona Quispe DIV E
ejercicio 7 e/s
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaramos las variables 
	var numeroUno;
	var numeroDos;
	var resultado;

	//tomamos los numeros por Id

	numeroUno=document.getElementById("txtIdNumeroUno").value;
 	numeroDos=document.getElementById("txtIdNumeroDos").value;

 	//transformamos los numeros en enteros

 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);

 	//sumamos los datos de las variables 

 	resultado = numeroUno + numeroDos;

	alert("La suma es: " + resultado);
	
}

function restar()
{
	//declaramos las variables 
	var numeroUno;
	var numeroDos;
	var resultado;

	//tomamos los numeros por Id

	numeroUno=document.getElementById("txtIdNumeroUno").value;
 	numeroDos=document.getElementById("txtIdNumeroDos").value;

 	//transformamos los numeros en enteros

 	numeroUno = parseInt(numeroUno);
 	numeroDos = parseInt(numeroDos);

 	//sumamos los datos de las variables 

 	resultado = numeroUno - numeroDos;

	alert("La resta es: " + resultado);
	
}

function multiplicar()
{ 
	//declaramos las variables 
	var numeroUno;
	var numeroDos;
	var resultado;

	//tomamos los numeros por Id

	numeroUno=document.getElementById("txtIdNumeroUno").value;
 	numeroDos=document.getElementById("txtIdNumeroDos").value;

 	//transformamos los numeros en enteros

 	numeroUno = parseInt(numeroUno);
 	numeroDos = parseInt(numeroDos);

 	//sumamos los datos de las variables 

 	resultado = numeroUno * numeroDos;

	alert("La mltiplicacion es: " + resultado);
	
}

function dividir()
{
	//declaramos las variables 
	var numeroUno;
	var numeroDos;
	var resultado;

	//tomamos los numeros por Id

	numeroUno=document.getElementById("txtIdNumeroUno").value;
 	numeroDos=document.getElementById("txtIdNumeroDos").value;

 	//transformamos los numeros en enteros

 	numeroUno = parseInt(numeroUno);
 	numeroDos = parseInt(numeroDos);

 	//sumamos los datos de las variables 

 	resultado = numeroUno / numeroDos;

	alert("La divicion es: " + resultado);
}


/*
Jacqueline Ticona DIV E
ejercicio 3 e/s
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos las variables 

	var nombreIngresado; 
	
	//traemos un elemento de ID (document.getElementById)
	//el elemento que debemos traer:("txtIdNombre")
	//de la caja de texto tomamos el valor = (.value)
	
	nombreIngresado=document.getElementById("txtIdNombre").value;
	

	//lo mostramos por alert
	
	alert("Hola: " + nombreIngresado);

}
/*
txtIdNombre
*/



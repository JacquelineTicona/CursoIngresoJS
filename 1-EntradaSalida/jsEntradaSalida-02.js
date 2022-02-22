/*
Jacqueline Ticona Quispe DIV E
ejercicio 2 e/s
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	//declaramos la variable nombre 
	//despues lo pasamos por prompt
	
	var nombreIngresado;
	nombreIngresado = prompt("Ingrese su nombre");
	
	alert("Hola: " + nombreIngresado);
}


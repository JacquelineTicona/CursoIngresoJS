/* 
Jacqueline Ticona DIV E
ejercicio 4 e/s
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaramos variables

	var nombreIngresado;

	//asiganos ala variable nombreIngresado el texto que escribio elusuario dentro dela ventana prompt

	nombreIngresado = prompt("Ingrese su nombre");

	//copio el nombre que tengo guardado en la variable nombreIngresado dentro de la caja de texto embebida en la pagina

	document.getElementById("txtIdNombre").value = nombreIngresado;


	alert(" Hola: " + nombreIngresado);
}


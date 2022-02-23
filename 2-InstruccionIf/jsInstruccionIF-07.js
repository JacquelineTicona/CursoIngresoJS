/*
Jacqueline Ticona Quispe DIV E7
ejercicio if 7
Al ingresar una edad menor a 18 años y un estado 
civil distinto a "Soltero", mostrar el siguiente 
mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	//declaramos las variables 

	var edad;
	var estado;

	//tomamos el valor por Id y lo parseamos 

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estado=document.getElementById("estadoCivil").value;

	//desarrollamos 

	if(edad < 18 && estado != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero.")
	}

}//FIN DE LA FUNCIÓN
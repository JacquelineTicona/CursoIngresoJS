/*
Jacqueline Ticona Quispe DIV E
ejercicio if 4
Al ingresar una edad debemos informar si la persona es adolescente, edad 
entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	//declaramos las variables 
	var edad;

	//tomamos el valor por ID y lo parseamos 

	edad=parseInt(document.getElementById("txtIdEdad").value);
 	
 	//desarrollamos 
 	//"si mayor a 12 y menor a 18"
 	if ( edad > 12 && edad <18)
 	{
 		alert("Es adolescente.")
 	}

}//FIN DE LA FUNCIÓN
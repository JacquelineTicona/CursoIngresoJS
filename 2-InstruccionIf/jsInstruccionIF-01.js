/*
Jacqueline Ticona Quispe DIV E
ejercicio 1 if
Ingrese su edad
 Mostrar información
Enunciado:
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	//declaramos variables

	var edad;

	//tomamos los valores por ID
	
	edad=document.getElementById("txtIdEdad").value;

	//parseamos los datos 

	edad = parseInt(edad);
	
	//desarollamos 

	if(edad==15)
	{
		alert("Niña Bonita.");

	}
}
/*
operadores 
igual ==
distinto !=
mayor >
menor <
mayor o igual >=
menor oigua <=
*/
/*
Jacqueline Ticona Quispe DIV E
ejercicio if 6
Al ingresar una edad debemos informar si la 
persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño 
(menor a 13 años).
*/
function mostrar()
{
	//declaramos las variables 

	var edad;

	//tomo el valor por ID y lo parseo

	edad=parseInt(document.getElementById("txtIdEdad").value);  
	
	//desarrollamos 

	if(edad > 17)
	{
		alert("Es mayor de edad.")
	}
	else if(edad > 12 && edad <18){
			alert("Es adolescente.")
		}
		else
		{
			alert("Es un niño.")
		}

}//FIN DE LA FUNCIÓN
/*
&& = ampersand 
*/

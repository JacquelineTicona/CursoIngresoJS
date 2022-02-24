/*
Jacqueline Ticona Quispe DIV E
ejercicio switch 9
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el 
ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un 
descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un 
aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% Mar del plata tiene un 
aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	//declaramos las variables 

	var estacion;
	var destino; 
	var precioFinal;
	var descuento = 0;
	var aumento = 0;
	const precio = 15000;

	//tomamos los valores por ID

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	//desarrollamos
	
	switch (estacion)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				aumento = 20;
			}
			else if(destino == "Mar del plata")
			{
				descuento = 20;
			}
			else{
				descuento = 10;
			}
			break;

		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = 20;
			}
			else if(destino == "Mar del plata")
			{
				aumento = 20;
			}
			else{
				aumento = 10;
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba")
			{
				precioFinal = precio;
			}
			
			else {
				aumento = 10;
			}
			break;
	}

	if (aumento !=0)
	{
		precioFinal = precio + precio * aumento /100;
	}
	else if(descuento != 0)
	{
		precioFinal = precio - precio * descuento /100;
	}

	alert("Precio final $ " + precioFinal);

}//FIN DE LA FUNCIÓN
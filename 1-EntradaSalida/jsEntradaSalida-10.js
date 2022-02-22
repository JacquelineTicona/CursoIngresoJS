/*
Jacqueline Ticona Quispe DIV E
ejercicio 10 e/s
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//decalaramos las variables 
	var importe;
	var importeTotal;
	var descuento;

	//tomamos los importes por ID

	importe=document.getElementById("txtIdImporte").value;
 	importeTotal=document.getElementById("txtIdResultado").value;

 	//transformamos los numeros a enteros (parseInt)

 	importe=parseInt(importe);
 	importeTotal=parseInt(importeTotal);

 	//realizamos la operacion y le hacemos el descuento del 25%

 	descuento = importe * 25 / 100;
 	importeTotal = importe + descuento;

	alert("Importe total: " + importeTotal);


}

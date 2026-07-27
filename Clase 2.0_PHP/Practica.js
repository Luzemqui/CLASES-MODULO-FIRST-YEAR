<?php

 // 1. Declaramos las variables
 $producto ="Mochila escolar";
 $precio_original = 50;
 $tiene_descuento = true;

 echo "<h1>Tienda Escolar</h1>";
 echo "Producto: " . $producto . "<br>";
 echo "Precio" . $precio_original . "<br>";

 // 2. Evaluamos si aplica el descuento del 10%

 if ($tiene_descuento == true) {
    $descuento = $precio_original * 0.10;
    $precio_final = $precio_original - $descuento;
    echo "Tienes un 10% de descuento!, tu precio final es: " . $precio_final;

 } else {
    echo "No aplicas para un descuento, tu precio final es: " . $precio_original;
 }

 $colores = ["Rojo" , "Verde" , "Azul"];
 echo $colores[0];


 $persona = [
    "nombre" => "Ana",
    "edad" => 24 ,
    "ciudad" => "Madrid"
];

echo $persona["ciudad"];


function saludar($usuario) {
    return "!Hola, " . $usuario . "!";
}

echo saludar("Diego");
 ?>
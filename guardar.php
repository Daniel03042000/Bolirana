<?php
    require 'conexion.php';

    $puntaje1 = $_POST['puntaje_1'];
    $puntaje2 = $_POST['puntaje_2'];

    $insertar = "INSERT INTO puntajes VALUES ('','$puntaje1','$puntaje2')";

    $query = mysqli_query($conectar,$insertar);

    if ($query){
        echo 'correcto';

    }else{
        echo 'incorrecto';
    }



?>
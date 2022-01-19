<?php

    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $lloc = $data["lloc"];
    $tipus = $data["tipus"];
    $lat = $data["lat"];
    $long = $data["long"];

    $sqlInsert = "INSERT INTO `localizaciones`(`sitio`, `tiposSitio`, `latitud`, `longitud`) VALUES ('$lloc', '$tipus','$lat','$long')";
    $sql = mysqli_query($con, $sqlInsert);

    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);
?>

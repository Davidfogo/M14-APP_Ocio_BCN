<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $lloc = $data["lloc"];
    $tipus = $data["tipus"];
    $lat = $data["lat"];
    $long = $data["long"];

    $id = $data["id"];
    
    $sqlInsert = "UPDATE `localizaciones` SET `sitio` = '$lloc', `tiposSitio` = '$tipus', `latitud` = '$lat', `longitud` = '$long' WHERE idLoc = $id";
    
    $sql = mysqli_query($con, $sqlInsert);

    
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);
?>

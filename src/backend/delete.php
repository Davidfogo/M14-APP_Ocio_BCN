<?php

    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();
    
    $id = $data["idLoc"];

    $sqlDelete = "DELETE FROM `localizaciones` WHERE idLoc = '$id'";

    $sql = mysqli_query($con, $sqlDelete);

    if($sql){
        $response["message"] = "Deleteee";
    }else{
        $response["message"] = "OK Deleteee";
    }
  

    echo json_encode($response);
?>

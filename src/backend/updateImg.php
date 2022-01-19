<?php
    include "config.php";
    
    $response = array();

    
    $imatge = $_FILES["imatge"];
    $id = $_POST["id"];
    
    $target_dir = "uploads/";

    $target_file = $target_dir.basename($imatge["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));


    //CHECK IF IMAGE FILE IS A ACTUAL IMAGE OR FAKE


    if(move_uploaded_file($imatge["tmp_name"],$target_file)){
        $message = "the file "+ htmlspecialchars(basename($imatge["name"]))." has been uploaded.";
    }else{
        $message = "sorry";
    }






    $sqlUpdate = "UPDATE `localizaciones` SET `imatge` = '$imatge', WHERE idLoc = $id";
    
    $sql = mysqli_query($con, $sqlUpdate);

    // $response["message"] = $message;
    // if($sql){
    //     $response["message"] = "OK";
    // }else{
    //     $response["message"] = "KO";
    // }

    $response["message"] = $message;
    echo json_encode($response);
?>

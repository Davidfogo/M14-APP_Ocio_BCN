<?php

    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $sqlRead = "SELECT * FROM `localizaciones`";
    $sql = mysqli_query($con, $sqlRead);

    $data = array();

    while($row = mysqli_fetch_object($sql)){
        $data[] = $row;
    }
  

    echo json_encode($data);
?>

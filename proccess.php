<?php
    $status = '';

    $length = count($_FILES['pics']['name']);

    for($i = 0 ; $i < $length; $i++){
        if(move_uploaded_file($_FILES['pics']['tmp_name'][$i], 'Upload/'.$_FILES['pics']['name'][$i]))
            $status = 'Success';
        else
            $status = 'Fail';
    }

    

    echo json_encode(array(
        'status' => $status
    ));
?>
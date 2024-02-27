<?php
if(isset($_POST['tempo'])) {
   
    $file = fopen('data.csv', 'a');
    

    fwrite($file, $_POST['tempo'] . PHP_EOL);
    
   
    fclose($file);
    
    
    echo 'Tempo registrado com sucesso.';
} else {
   
    echo 'Erro: Tempo não recebido.';
}
?>
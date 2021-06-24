<?php
//todo
// il faut maj les onglets JS via SQL
// il faut maintenant MAJ sql ( vitesseMoyenne temps et trajet) en ajax en JS
//






$filename= "compteur.txt";
$compteur = file_exists($filename) ? file_get_contents($filename) + 1 : 1;
file_put_contents($filename,$compteur,LOCK_EX);

$data=file_get_contents("php://input");

file_put_contents("velo".$compteur.".txt",$data.PHP_EOL);
echo '$data';
echo $data;
$dataJSON=json_decode($data,true);
echo '---';
//
// $vitesse =explode(",",substr($dataJSON["vitesse"],1,-1));
$date =$dataJSON["jour"];
echo '$date';
echo $date;
print_r ($dataJSON);
// print_r ($inclinaison);
// print_r ($vitesse);
// print_r ($longitude);
// print_r ($latitude);
print_r ($date);
echo $date;
echo '---';
$bdd = mysqli_connect('127.0.0.1','drpnngev_ludo','q!2R(O9EJss6i0','drpnngev_velo'); 
if (!$bdd) { 
    $error=mysql_error();
    file_put_contents("erreur.txt",£error.PHP_EOL);
die('Could not connect to MySQL: ' . mysql_error()); 
} 
$sql = "INSERT INTO parcours (date,distance,url) VALUES ('".$date."',".$dataJSON['distance'].",'velo".$compteur.".txt')";
if (mysqli_query($bdd, $sql)){
    echo '---';
    echo "enregistrement effectué";
} else{
    echo '---';
    echo "errrrreeeeeuuuurrrr!!!!". mysqli_error($bdd);
}
mysqli_close($bdd);

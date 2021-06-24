<?php
//todo
// il faut maj les onglets JS via SQL
// il faut maintenant MAJ sql ( vitesseMoyenne temps et trajet) en ajax en JS
//






$filename= "compteur.txt";
$compteur = file_exists($filename) ? file_get_contents($filename) + 1 : 1;
file_put_contents($filename,$compteur,LOCK_EX);

// $data=file_get_contents("php://input");

$data="[[[1624305095000,100],[1624522279323,101],[1624522279323,102]],[[1624522279323,45.6,0.45,130,12],[1624522279323,45.6,0.45,131,13],[1624522279323,45.6,0.45,132,14]],12000,100]";


$dataJSON=json_decode($data,true);
$BPM =$dataJSON[0];
$position =$dataJSON[1];
$distance =$dataJSON[2];
$dPlus =$dataJSON[3];
date_default_timezone_set('Europe/Paris');
$date =date("d/m/Y H:m",$BPM[0][0]/1000);
$datePourFichier1 = str_replace("/","-",$date);
$datePourFichier = str_replace(":","H",$datePourFichier1);
echo $datePourFichier;
echo "<br>";
var_dump ($date);
echo "<br>";
echo "$distance";

file_put_contents("parcours n°".$compteur." du ".$datePourFichier.".txt",$data.PHP_EOL);


$bdd = mysqli_connect('127.0.0.1','drpnngev_ludo','q!2R(O9EJss6i0','drpnngev_velo'); 
if (!$bdd) { 
    $error=mysql_error();
    file_put_contents("erreur.txt",£error.PHP_EOL);
die('Could not connect to MySQL: ' . mysql_error()); 
} 
$sql = "INSERT INTO parcours (date,distance,url) VALUES ('".$date."',".$distance.",'velo".$compteur.".txt')";
if (mysqli_query($bdd, $sql)){
    echo '---';
    echo "enregistrement effectué";
} else{
    echo '---';
    echo "errrrreeeeeuuuurrrr!!!!". mysqli_error($bdd);
}
mysqli_close($bdd);

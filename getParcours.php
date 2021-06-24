<?php 
 
 $secteur = file_get_contents('php://input');
 $bdd = mysqli_connect('127.0.0.1','drpnngev_ludo','q!2R(O9EJss6i0','drpnngev_velo'); 
if (!$bdd) { 
die('Could not connect to MySQL: ' . mysql_error()); 
} 

$reponse=mysqli_query($bdd,'SELECT * FROM parcours');
$data=array();
while($row=$reponse->fetch_assoc()){
array_push($data,$row);

} 

echo json_encode($data);
exit();


?>

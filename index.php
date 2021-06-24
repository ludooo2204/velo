<!doctype html>
<html lang="en">
  <head>

    <!-- revoir l'import de src -->
  <!-- Font Awesome -->
<link rel="stylesheet" href="css/all.css">
<!-- Google Fonts -->
<link rel="stylesheet" href="css/css.css">
<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

    
<script src="js/moment.min.js"></script>
    <script src="js/Chart.bundle.min.js"></script>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="ol.js"></script>
    <script type="text/javascript" src="js/popper.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
    <link rel="stylesheet" href="ol.css"></script>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css" type="text/css"> -->
 <script src="js/d3.v4.min.js"></script>

    <!-- <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script> -->
    <script src="ajax.js "></script>
    <style>
    body{
      padding-top:20px;
        /* margin:6rem; padding: 1.5rem 1.5rem 0 1.5rem; */
  border: 0.6rem solid #D6FFF5;
/* background:url('route.jpg'); */
background-repeat:no-repeat;
background-size: cover;
background-attachment: fixed;
    }

    /* .custom-range::-webkit-slider-thumb {
  background: url('velo2.png');
  height:100px;
  width:100px;
} */
      #map {
        
        /* float:left; */
        width: 40%;
        height:500px;
       
      }

      #graphDenivelleDiv{
        
        width: 40%;
        height:500px;
        /* margin:50px; */
        
      }
      .slidecontainer{
        padding:50px;
        width:100%;
      }
      .slider{
        width:100%;
        height:15px;
        opacity:0.7;
        /* background-color:#d3d3d3; */
      }
      .slider:hover{
        opacity:1;
        
      }
      svg{
        
        background-color:#ffffff99;
      }
      #tesst{
        
        padding-left:50px;
        /* padding-bottom:50px; */
        display:flex;
        width:100%;
        height:100%;
      }
      /* .map:hover {
         border: 5px solid black;
        color:rgb(255, 255, 255)
      } */
      
      #info2 {
        position: absolute;
        height: 1px;
        width: 1px;
       
        z-index: 100;
      }

      .tooltip.in {
        opacity: 1;
      }
      .tooltip.top .tooltip-arrow {
        border-top-color: white;
      }
      .tooltip-inner {
        border: 2px solid white;
        color:rgb(255, 255, 255)
      }
    </style>
   
    <title>OpenLayers example</title>
  </head>
  <body>
  mkv,sdm, vsdmv,m
  <button onclick="testenvoi()">envoi</button>
  <button id="effaceEtapes">effacer etapes</button>
  <span id ='record'></span>
    <div class="form-example">
      <select class="parcours"  onchange="
      if (window.svg && window.svg!== null) d3.select('svg').remove();
      console.log(this.value);ajaxGet(JSON.parse(this.value).url,function(e){console.log(e);valide(e)})
      "></select>
      
      <!-- ajaxGet(listParcoursSql[0].url,function(e){console.log(e);valide(e)}) -->
      </div>
   <p></p>
  <!-- </form> -->
    <div id="info"></div>
    <div id="tesst">
     <div id="map" class="map"> 
          <div id="info2"></div></div>
          
    <div id="graphDenivelleDiv">
      <!-- <canvas id="graphDenivelle"></canvas> -->
    </div></div>


<div class="slidecontainer">
<input type="range" min="1" max="1000" value="500" class="custom-range" id="myRange">
</div>
    <div id ="charts">
    <canvas id="myChart"></canvas>
  </div>
    <!-- <canvas id="myChart2"></canvas> -->
    <canvas id="myChart3"></canvas>
 
   <script>
   function testenvoi (){
       ajaxPost("velo.php",'{"distance":"0.09247612086509999","heure":"[10:48:29, 10:49:34, 10:49:36, 10:49:38, 10:49:40, 10:49:43, 10:49:45, 10:49:48, 10:49:51, 10:49:56, 10:50:10, 10:50:12, 10:50:14, 10:50:16, 10:50:19, 10:50:28, 10:50:38]","latitude":"[46.84724905, 46.84720707, 46.84715695, 46.84710373, 46.84705746, 46.84699883, 46.84693637, 46.84688622, 46.8468267, 46.8467756, 46.84673279, 46.84673257, 46.84673051, 46.84668206, 46.8466365, 46.8465959, 46.8465556]","longitude":"[0.54840914, 0.54837681, 0.54837658, 0.54837075, 0.54836548, 0.5483618, 0.54837029, 0.54838223, 0.54838096, 0.5483787, 0.54833846, 0.54826824, 0.54818738, 0.54815891, 0.54816577, 0.54819611, 0.54824769]","vitesse":"[0.0, 0.93, 1.54, 1.87, 1.83, 0.93, 0.0, 0.0, 0.0, 0.0, 2.44, 5.72, 3.45, 0.0, 0.0, 0.0, 0.0]","inclinaison":"[61.8, 2944, 1476, 1572, 2454, 2297, 1781, 2074, 924.7, 1331, 4797, 526, 4638, 4933, 8930, 14, 77.4]","jour":"18-09-2020"}',function(a){console.log(a)})}
   </script>
   <!-- <script src="script2.js"></script> -->
    <script src="script.js"></script>
  </body>
</html>
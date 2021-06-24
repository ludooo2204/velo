let etapeAChoisir=[];
let feature
let feature2
let featureNumero2
ongletDejaTouche=false
let dataObjectArray
let slider=document.getElementById("myRange")
let mapId=document.getElementById("map")
let effaceEtapes=document.getElementById("effaceEtapes")
let ongletChoix=document.querySelector(".parcours")
ongletChoix.addEventListener('change',function(){ongletDejaTouche=true})
console.log(mapId);
let dataParcours={}

effaceEtapes.addEventListener('click',function(){
  console.log("lolo")
  console.log(vectorLineLayer.getSource())
  console.log(feature)
 vectorLineLayer.getSource().removeFeature(feature)
 vectorLineLayer.getSource().removeFeature(featureNumero2)
})

ajaxGet("parcours.json",(response)=>{

  let data = (JSON.parse(response))
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      // console.log(key);
      // console.log(element);
      if (key!='heure' && key!='jour') {
        dataParcours[key]=JSON.parse(element);}
        else {
      dataParcours[key]=element
    }
    }
  }
  let heures= (dataParcours.heure.slice(1,-1). split(","))
let dateSplit = (dataParcours.jour.split("-"))
let nouvelleDate = dateSplit[1] +"/"+dateSplit[0]+"/"+dateSplit[2]
let dateParcours =[]
  // console.log(test);
  for (const iterator of heures) {

    let date = nouvelleDate + " " + iterator
      // console.log(new Date(date));
      dateParcours.push(new Date(date))
  }
  dataParcours.heure=dateParcours
console.log(dataParcours);



  })



















var vectorLineLayer
let vitesseMoyenne
// 

////////////////////////////////////////


let listeData=[]
let nbrParcours;
ajaxGet("compteur.txt",function(e){nbrParcours=e
// console.log(nbrParcours);
fetch("velo"+nbrParcours+".txt").then(function(response) {
    return response.text().then(function(text) {
      // console.log(text);
        let dataArray=JSON.parse(text)
        console.log(dataArray);
        let listParcoursSql;
        //  dataArray.pop()
    ajaxGet("getParcours.php",function(e){
      console.log(JSON.parse(e));listParcoursSql=JSON.parse(e)
    console.log(listParcoursSql);

         for (let i = 0; i < dataArray.length; i++) {
            const element = JSON.parse(dataArray[i]);
           
             listeData.push(element)
         }

       

        var select = document.querySelectorAll(".parcours"); 

        console.log(listeData)
      


 


            console.log('fetch velo terminé');
            
                    //  for (var j=0 ; j<select.length ; j++){
                       console.log("1");
            for(var i = listParcoursSql.length-1; i >-1 ; i--) {
                var opt = listParcoursSql[i];
                console.log("opt")
              console.log(opt);

                //  let moyenneVitesse=0
                //  opt.vitesse=JSON.parse(opt.vitesse)
              //    for(var k=0;k<opt.vitesse.length;k++)  moyenneVitesse+=opt.vitesse[k]
              //  vitesseMoyenne=moyenneVitesse/opt.vitesse.length
                
              //   let dateDepart=new Date(opt.date.slice(1,20))            
              //   let dateArrive=new Date(opt.date.slice(-24,-5))
              //   let ecartMinute=(Math.trunc((dateArrive-dateDepart)/60000));
              //   let ecartSeconde=Math.round((((dateArrive-dateDepart)/60000)-ecartMinute)*60)
              //   let tempsParcours=ecartMinute+"'"+ecartSeconde+'"'
               
                var el = document.createElement("option");
                el.textContent ="sortie du "+opt.date+" "+ Math.round(opt.distance*100)/100 + " Km";
                el.value = JSON.stringify(opt);
                el.selected=opt;
                select[0].appendChild(el)}
            // }
             console.log(listParcoursSql.length);
             ajaxGet(listParcoursSql[0].url,function(e){valide(e)})
            // valide(listParcoursSql[listParcoursSql.length-1])
            
          
        
  }
    
    )
  })
    //fin fetch velo

  })
})
    function valide(DataParcours){
      dataObjectArray=[]
      //  console.log(DataParcours);
      let tempsDeMesure=[]

      data=DataParcours
      let coordonneesTemp=[];
      let coordonneesInter=[];
      console.log(typeof(DataParcours));
      let info2=document.querySelector(".ol-viewport")
      console.log(info2);
   if (typeof(DataParcours)=="string")  {data=JSON.parse(data)}
    if (info2){
              document.getElementById("myChart").remove()
              // document.getElementById("graphDenivelle").remove()
              let node=document.createElement("canvas")
              node.id="myChart"
              
              document.getElementById("charts").appendChild(node)
              // node.id="graphDenivelle"
              // document.getElementById("graphDenivelleDiv").appendChild(node)
              mapId.removeChild(info2)
              // body.removeChild(info2)
              // console.log(data);
            //  data=JSON.parse(data);
console.log(data);
    }
    let graphDenivelle=document.getElementById("graphDenivelle")
    // if(graphDenivelle) alert("jj")
    // data=JSON.parse(data)
     console.log(data);
       data.vitesse=JSON.parse(data.vitesse)
       console.log(data)
      data.inclinaison=JSON.parse(data.inclinaison)
        console.log(data)
      data.latitude=JSON.parse(data.latitude)
      data.longitude=JSON.parse(data.longitude)
      // console.log(data.vitesse);
      data.vitesse=data.vitesse.slice(3,-1)
      data.inclinaison=data.inclinaison.slice(3,-1)
      data.latitude=data.latitude.slice(3,-1)
      data.longitude=data.longitude.slice(3,-1)
      data.distance=JSON.parse(data.distance)
   
      
      let vitesseMax=Math.max.apply(Math,data.vitesse)

      
      let moyenne=0
    
      for (let i = 0; i < data.inclinaison.length; i++) {
          
        const element = data.inclinaison[i];
      ;
      moyenne+=element
     
      }
    
      data.denivele=data.inclinaison.map(x=>(x-moyenne/data.inclinaison.length)/(483/22)  )
      // console.log("moyenne = ",moyenne/data.inclinaison.length);
      // console.log("somme= ",moyenne);
      // console.log(data.inclinaison);
      // console.log(data.vitesse.indexOf(vitesseMax));
      


      let dateData;
      console.log(data);
        // if (data.date)     { dateData=(data.date.slice(1,-1).split(", "))}
        // else {dateData=(data.heure.slice(1,-1).split(", "))}
      dateArray=[]
      dateArrayChart=[]
      let distanceParcouruArray=[]
      let distanceParcouruCumulArray=[]
      let distanceParcouruCumul=0


      let heures= (data.heure.slice(1,-1). split(","))
      let dateSplit = (data.jour.split("-"))
      let nouvelleDate = dateSplit[1] +"/"+dateSplit[0]+"/"+dateSplit[2]
      let dateParcours =[]
        // console.log(test);
        for (const iterator of heures) {
      
          let date = nouvelleDate + " " + iterator
            // console.log(new Date(date));
            dateArray.push(new Date(date))
        }
        data.heure=dateArray



        console.log(data);





     
// console.log(data);
      // console.log(new Date(dateData[0]));
      for (let i = 0; i < data.heure.length; i++) {
   
                // dateArrayChart.push(new Date(dateData[i]))
                //   dateArray.push(new Date(dateData[i]).toLocaleString()); 
                  // console.log(i);

                  //TODO a revoir!! avec calcul distance lat-lon
        if (i==0) distanceParcouruArray.push(0)
          
        else          { 

               
          let distanceInter=getDistanceFromLatLonInkm(data.latitude[i-1],data.longitude[i-1],data.latitude[i],data.longitude[i])
          //  console.log(distanceInter);
          distanceParcouruCumul+=distanceInter
//  console.log(distanceParcouruCumul);
          distanceParcouruArray.push(Math.round(distanceParcouruCumul*1000)/1000)}
                  
              
      }
      // console.log(distanceParcouruArray);
      // console.log(dateArrayChart[10]-dateArrayChart[0]);
      // console.log(new Date(dateData[0]));
      for (var i=0;i<data.latitude.length;i++){
        dataObjectArray[i]={}
          coordonneesInter.push(data.longitude[i])
          coordonneesInter.push(data.latitude[i])
      
          coordonneesTemp.push(coordonneesInter)
      
          coordonneesInter=[];
      
          dataObjectArray[i].coordonneesLatLon=JSON.parse(JSON.stringify(coordonneesTemp[i]))
          dataObjectArray[i].vitesse=JSON.parse(JSON.stringify(data.vitesse[i]))
          dataObjectArray[i].inclinaison=JSON.parse(JSON.stringify(data.inclinaison[i]))
        // console.log(dateArray[i]);
          dataObjectArray[i].date= new Date(dateArray[i])
        
      }
      
       let rawCoordonnees=JSON.parse(JSON.stringify(coordonneesTemp))
       console.log(dataObjectArray);
      
      


      
var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
         labels: data.heure,
        datasets: [{
            label: 'Vitesse',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data.vitesse,
            fill: false,
            pointRadius:1
        }]
    },

    // Configuration options go here
    options: {
      scales:{
        xAxes:[{
          ticks:{
            callback : function(value,index,values){
              return value.toLocaleString('FR-fr')
            }
          }
        }]
      }
    }
});


















      
      /////////////////////////////////////////////////////////////////////////////////
      var colors = {
          'Clement Latour': 'rgba(0, 0, 255, 0.7)',
          'Damien de Baesnt': 'rgba(0, 215, 255, 0.7)',
          'Sylvain Dhonneur': 'rgba(0, 165, 255, 0.7)',
          'Tom Payne': 'rgba(0, 255, 255, 0.7)',
          'Ulrich Prinz': 'rgba(0, 215, 255, 0.7)',
        };
      var styleCache = {};
      var styleFunction = function (feature) {
      //   var color = colors[feature.get('PLT')];
        var style = styleCache[colors[0]];
        if (!style) {
          style = new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: '#000000',
              width: 4,
            }),
          });
          styleCache[colors[0]] = style;
        }
        return style;
      };
              map = new ol.Map({
                  target: 'map',
                  layers: [
                    new ol.layer.Tile({
                      source: new ol.source.OSM()
                    })
                  ],
                  view: new ol.View({
                    center: ol.proj.fromLonLat([0.41343103, 46.89901721]),
                    zoom: 12
                  })
                });
          
          
                
          
          for (var i = 0; i < dataObjectArray.length; i++) {
            dataObjectArray[i].coordonneesEPSG = ol.proj.transform(dataObjectArray[i].coordonneesLatLon, 'EPSG:4326', 'EPSG:3857');
          }
          let coordonneesEPSGArray=[]
      // console.log(dataObjectArray);
          for (let i = 0; i < dataObjectArray.length; i++) {
            const element = dataObjectArray[i].coordonneesEPSG;
            coordonneesEPSGArray.push(element)
            // console.log(element);
          }
          // console.log(coordonneesEPSGArray);
          featureLine = new ol.Feature({
              geometry: new ol.geom.LineString(coordonneesEPSGArray)
          });
          
          vectorLine = new ol.source.Vector({});
          vectorLine.addFeature(featureLine);
          
          vectorLineLayer = new ol.layer.Vector({
              source: vectorLine,
           style:styleFunction
         
          });
          
          map.addLayer(vectorLineLayer);
       
      
      
          let arrayEPSGTEMP=dataObjectArray.map(function(e){return e.coordonneesEPSG[0]})
          // console.log(arrayEPSGTEMP);
      
      
      
      
      //////////
      var info = $('#info2');
       console.log(info);
      info.tooltip({
        animation: false,
        trigger: 'manual',
      });
      
      var displayFeatureInfo = function (pixel,infoTooltip,vitesse) {
      // console.log(pixel[1]);
        info.css({
          left: pixel[0] +50+ 'px',
          top: pixel[1]  +50+ 'px',
         
        });
        
      let tooltipCss=document.querySelector(".tooltip-inner")
      
      if(tooltipCss) {
        // console.log(vitesse);
        tooltipCss.style.backgroundColor='rgb('+vitesse*10+',0,0)'}
      
      
        var closestFeature2 = vectorLine.getClosestFeatureToCoordinate(pixel);
      
        var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      
          return feature;
        });
        if (closestFeature2) {
          info.attr('data-original-title', infoTooltip).tooltip('show');
        } else {
          info.tooltip('hide');
        }
      };
      
      
           map.on('pointermove',function(e){
      var pixel2=map.getEventPixel(e.originalEvent)
      var hit=map.hasFeatureAtPixel(pixel2)
      //  console.log(pixel2);
      
      
      map.getViewport().style.cursor= hit ? 'pointer':''
      
      
      var coordinate = map.getEventCoordinate(e.originalEvent);
        displaySnap(coordinate,pixel2);
              })
      
              var point = null;
              var line = null;
              var displaySnap = function (coordinate,pixel) {
                // console.log(coordinate);
                var closestFeature = vectorLine.getClosestFeatureToCoordinate(coordinate);
                var info = document.getElementById('info');
                // console.log(closestFeature);
                if (closestFeature === null) {
                  point = null;
                  line = null;
                  info.innerHTML = '&nbsp;';
                } else {
                  var geometry = closestFeature.getGeometry();
                  var closestPoint = geometry.getClosestPoint(coordinate);
                  if (point === null) {
                    point = new ol.geom.Point(closestPoint);
                  } else {
                    point.setCoordinates(closestPoint);
                  }
       
                 
                  var coordinates = [coordinate, [closestPoint[0], closestPoint[1]]];
      
                  var lonlat=ol.proj.transform(closestPoint,'EPSG:3857','EPSG:4326')
                  let lon=lonlat[0]
                  let lat=lonlat[1]
      
                 
                //  console.log(dataObjectArray)
                  let positionClosestPoint=trouvePositionLaPlusProche(coordonneesEPSGArray,closestPoint[0],closestPoint[1])

                    // console.log(closestFeature.getId());
                        //  if(positionClosestPoint!=-1)
                        //  {
                          //  console.log(positionClosestPoint);
                           let vitesseRoundee=Math.round(dataObjectArray[positionClosestPoint].vitesse*100)/100;
                           info.innerHTML = dataObjectArray[positionClosestPoint].date+" vitesse de "+vitesseRoundee+ " km/h - inclinaison de "+dataObjectArray[positionClosestPoint].inclinaison+" %"
                           displayFeatureInfo(pixel,dataObjectArray[positionClosestPoint].date+" vitesse de "+vitesseRoundee+ " km/h - inclinaison de "+dataObjectArray[positionClosestPoint].inclinaison+" %",vitesseRoundee);
      
                        
                        //   }
                        // else  info.innerHTML ='&nbsp;'
      
                       
      
      
      
      
                 
                  
                  // lon+" - "+lat
      
      
                  if (line === null) {
                    line = new ol.geom.LineString(coordinates);
                  } else {
                    line.setCoordinates(coordinates);
                  }
                }
                map.render();
              };
              var stroke = new ol.style.Stroke({
                  color: 'rgba(255,0,0,0.9)',
                  width: 1,
                });
              var style = new ol.style.Style({
                  stroke: stroke,
                  image: new ol.style.Circle({
                    radius: 5,
                    fill: null,
                    stroke: stroke,
                  }),
                });
              vectorLineLayer.on('postrender', function (evt) {
                // console.log("evt");
                // console.log(evt);
                  var vectorContext = ol.render.getVectorContext(evt);
                  vectorContext.setStyle(style);
                  if (point !== null) {
                    vectorContext.drawGeometry(point);
                  }
                  if (line !== null) {
                    vectorContext.drawGeometry(line);
                  }
                });

          map.getViewport().addEventListener('mouseout',function(){
            console.log(vectorLineLayer)  
          //  window.map.removeLayer(vectorLineLayer) 
          })
          map.on('click',function(e){
            console.log(e.pixel);
            console.log(e);
            console.log(e.coordinate);
              let test=map.getFeaturesAtPixel(e.pixel)[0]
              if (test){
                var lonlat=ol.proj.transform(e.coordinate,'EPSG:3857','EPSG:4326')
                      let lon=lonlat[0]
                      let lat=lonlat[1]
                let iconeStyle= new ol.style.Style({
                  image: new ol.style.Icon({
                    anchor:[0.5,46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.9,
                    src:'velo1.png'
                  })
          
                })
                      
                      console.log(lon);
                      console.log(lat);
                      console.log(e.coordinate);
                      if (feature) {
                        featureNumero2= new ol.Feature(new ol.geom.Point(e.coordinate));
                        featureNumero2.setStyle(iconeStyle)
                        vectorLine.addFeature(featureNumero2)
                      }
                      else  { feature=new ol.Feature(new ol.geom.Point(e.coordinate));
                        feature.setStyle(iconeStyle)
                        vectorLine.addFeature(feature)}
                      // let feature=new ol.Feature(new ol.geom.Point(e.coordinate))
                      console.log('feature');
                      console.log(feature);
                      console.log('featureNumero2');
                      console.log(featureNumero2);
                    
                  
             
                      var closestFeature2 = vectorLine.getClosestFeatureToCoordinate(e.coordinate);
                      var geometry2 = closestFeature2.getGeometry();
                      var closestPoint2 = geometry2.getClosestPoint(e.coordinate);
                      // console.log(trouvePositionLaPlusProche(coordonneesEPSGArray,closestPoint2[0],closestPoint2[1]))
                      let indexPremiereEtape = trouvePositionLaPlusProche(coordonneesEPSGArray,closestPoint2[0],closestPoint2[1])
                      console.log(indexPremiereEtape);
                      console.log(dataObjectArray[indexPremiereEtape])
                      console.log(distanceParcouruArray[indexPremiereEtape])
                      
                      if(etapeAChoisir.length<2){
                      etapeAChoisir.push({date:dataObjectArray[indexPremiereEtape].date,distanceFromBegin:distanceParcouruArray[indexPremiereEtape]})
                        console.log(etapeAChoisir.length);
                        if (etapeAChoisir.length==2) {
                                 let distanceParcouru =etapeAChoisir[1].distanceFromBegin-etapeAChoisir[0].distanceFromBegin;
                         let tempsPassee = (etapeAChoisir[1].date-etapeAChoisir[0].date)/1000
                         console.log(tempsPassee);
                         let minutes = Math.floor(tempsPassee/60)
                         let secondes = tempsPassee - minutes *60
                         let heures = Math.floor(tempsPassee/3600)
                         let vitesseMoyenne = distanceParcouru/tempsPassee*3600
                         console.log("heures", heures);
                          setTimeout(()=>{alert("distance parcouru "+ distanceParcouru.toFixed(2) +" km en " + minutes + " min et "+ secondes +" sec soit une vitesse moyenne de " + vitesseMoyenne.toFixed(2) + " Km/h");document.getElementById('record').innerHTML="distance parcouru "+ distanceParcouru.toFixed(2) +" km en " + minutes + " min et "+ secondes +" sec soit une vitesse moyenne de " + vitesseMoyenne.toFixed(2) + " Km/h"},100)
                        }
                    }
                    else {
                      etapeAChoisir=[]
                    }
                   
                        }})
        
      
  
                        
      
      /////////////////////////////////////////////////////////////////////////////////
      
         
      
          // console.log(data.inclinaison);
            
             const cumulativeSum=(sum=> value=>sum+=value)(0);
             let deniveleCumule=data.denivele.map(cumulativeSum)
console.log(deniveleCumule);
console.log(distanceParcouruArray.length);
console.log(distanceParcouruArray);
      // console.log(dateArray);
          ctx = document.getElementById('myChart').getContext('2d');
       

          function graph(){
            // set the dimensions and margins of the graph
            var margin = {top: 10, right: 30, bottom: 30, left: 60},
                width = 800 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;
           
          
          console.log("witdh",width);
          console.log("distanceParcouruArray.length ",distanceParcouruArray.length);
          slider.max=distanceParcouruArray.length
          slider.value=0
          
          // append the svg object to the body of the page
          window.svg = d3.select("#graphDenivelleDiv")
            .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
          
          //Read the data
          // d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_IC.csv",function(data) {
          let dataDenivelle=[];  
          for (let i = 0; i < deniveleCumule.length; i++) {
            let objet={}
            objet.x=distanceParcouruArray[i]
            objet.y=deniveleCumule[i]
            dataDenivelle.push(objet)
            
          }
          
          console.log(dataDenivelle)
       //   console.log(JSON.stringify(dataDenivelle));
            // Add X axis --> it is a date format
            var x = d3.scaleLinear()
              .domain([0,d3.max(distanceParcouruArray)])
              .range([ 0, width ]);
            svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x));
          console.log(data);
            // Add Y axis
            var y = d3.scaleLinear()
              .domain([d3.min(deniveleCumule), d3.max(deniveleCumule)])
              .range([ height, 0 ]);
            svg.append("g")
              .call(d3.axisLeft(y));
          
            // This allows to find the closest X index of the mouse:
            var bisect = d3.bisector(function(d) { return d.x; }).left;
          
            // Create the circle that travels along the curve of chart
            var focus = svg
              .append('g')
              .append('circle')
                .style("fill", "none")
                .attr("stroke", "black")
                .attr('r', 8.5)
                .style("opacity", 1)
          
            // Create the text that travels along the curve of chart
            var focusText = svg
              .append('g')
              .append('text')
                .style("opacity", 0)
                .attr("text-anchor", "left")
                .attr("alignment-baseline", "middle")
          
            // Add the line
            svg
              .append("path")
              .datum(dataDenivelle)
              .attr("fill", "none")
              .attr("stroke", "steelblue")
              .attr("stroke-width", 1.5)
              .attr("d", d3.line()
                .x(function(d) { return x(d.x) })
                .y(function(d) { return y(d.y) })
                )
          
            // Create a rect on top of the svg area: this rectangle recovers mouse position
            svg
              .append('rect')
              .style("fill", "none")
              .style("pointer-events", "all")
              .attr('width', width)
              .attr('height', height)
              .on('mouseover', mouseover)
              .on('mousemove', mousemove)
              .on('mouseout', mouseout);
          
          
            // What happens when the mouse move -> show the annotations at the right positions.
            function mouseover() {
              focus.style("opacity", 1)
              focusText.style("opacity",1)
            }
          
            function mousemove() {
              // recover coordinate we need
              var x0 = x.invert(d3.mouse(this)[0]);
              var i = bisect(dataDenivelle, x0, 1);
            // console.log(x0)
            // console.log(d3.mouse(this)[0])
              selectedData = dataDenivelle[i]
              focus
                .attr("cx", x(selectedData.x))
                .attr("cy", y(selectedData.y))
              focusText
                .html("x:" + selectedData.x + "  -  " + "y:" + selectedData.y)
                .attr("x", x(selectedData.x)+15)
                .attr("y", y(selectedData.y))
              }
            
          
            function mouseout() {
              focus.style("opacity",1 )
              focusText.style("opacity", 1)
            }
          function sliding(e) {
            console.log(slider.value) 
            console.log(data);
            let eScale=e*width/distanceParcouruArray.length
            // console.log(eScale);
              // recover coordinate we need
              var x0 = x.invert(eScale);
              var i = bisect(dataDenivelle, x0, 1);
            //  console.log(data[i])
          
              selectedData = dataDenivelle[i]
              // console.log(dataDenivelle);
              // console.log(x0);
              // console.log(i);
              focus
                .attr("cx", x(selectedData.x))
                .attr("cy", y(selectedData.y))
              focusText
                .html("x:" + selectedData.x + "  -  " + "y:" + selectedData.y)
                .attr("x", x(selectedData.x)+15)
                .attr("y", y(selectedData.y))



              ///// pour la map
              // console.log(vectorLineLayer.getSource());
             
              if (feature2&&!ongletDejaTouche) {
                
                console.log("feature2",feature2); vectorLineLayer.getSource().removeFeature(feature2)}


                if (feature2&&ongletDejaTouche) {
                  ongletDejaTouche=false}
                  // console.log("feature2",feature2); vectorLineLayer.getSource().removeFeature(feature2)}
              // else
              
              // alert("sfdg")
              // console.log(e);
              let coor=dataObjectArray[e].coordonneesEPSG
          
    
    let iconeStyle= new ol.style.Style({
      image: new ol.style.Icon({
        anchor:[0.5,46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.9,
        src:'velo1.png'
      })
      // ,
      // text: new ol.style.Text({
      //   font: '12px Calibri ,sans-serif',
      //   fill: new ol.style.Fill({color: '#000'}),
      //   stroke: new ol.style.Stroke({
      //     color:'#fff', width:2
      //   }),
      //   text: 'lon '+lon + 'lat '+ lat
      // })
    })
          
      
          feature2=new ol.Feature(new ol.geom.Point(coor))
          // console.log(feature);
          feature2.setStyle(iconeStyle)
          vectorLine.addFeature(feature2)
          // var closestFeature2 = vectorLine.getClosestFeatureToCoordinate(coor);
          // var geometry2 = closestFeature2.getGeometry();
          // var closestPoint2 = geometry2.getClosestPoint(coor);
          // console.log(trouvePositionLaPlusProche(coordonneesEPSGArray,closestPoint2[0],closestPoint2[1]))
            // }




              }
          slider.addEventListener('input',function(e){sliding(e.target.value)})
          // }) fin de d3.csv
          
          
            }


graph();


        //   let ctx3 = document.getElementById('graphDenivelle').getContext('2d');;
        //   // console.log(ctx3);
        //   Chart.defaults.global.hover.intersect=false;
        //   window.chart3 = new Chart(ctx3, {
        //     // The type of chart we want to create
        //     type: 'line',
        
        //     // The data for our dataset
        //     data: {
        //         labels: distanceParcouruArray,
        //         datasets: [
                
                
        //         {
        //             label: 'denivele',
        //             backgroundColor: 'rgb(250, 250, 250)',
        //             borderColor:  function(context){
        //               // console.log (context);
        //               let index=context.dataIndex;
        //               let value=context.dataset.data[index];
        //               return value > 5 ? 'rgb(255, 0, 0)': 'rgb(0,0,0)';
        //           },
        //             data: deniveleCumule
        //             ,
                
        //             fill: true,
        //             pointRadius:  function(context){
        //               // console.log(context);
        //               let index=context.dataIndex;
        //               let value=context.dataset.data[index];
        //               return value > 1115 ? 'rgb(255, 0, 0)': 1;
        //           }
        //             ,
        //             pointHoverRadius:12,
        //             pointBackgroundColor:'blue'
        //         }
                
              
            
        //     ],
        //     },
        
        //     // Configuration options go here
        //     options: { 
              
        //         scales:{xAxes:{ticks:{precision:0}}},


        //         onHover: function(e){
        //                     //console.log(e);
        //                   let item=chart3.getElementAtEvent(e);
        //                   if (item.length)            console.log(item[0]._index);;
        //                   },


        //         tooltips:{
        //           mode:"index",
        //                   intersect:false}
            
            
            
        //                 }
        // });
      // var chart = new Chart(ctx, {
      //     // The type of chart we want to create
      //     type: 'line',
      
      //     // The data for our dataset
      //     data: {
      //         labels: dateArrayChart,
      //         datasets: [
      //             {
      //             label: 'vitesse',
      //             backgroundColor: 'rgb(255, 99, 132)',
      //             borderColor: 'rgb(255, 99, 132)',
      //            data: 
      //             data.vitesse                ,
         
      //             fill: false,
      //             pointRadius:1
      //         }
      //         ,
              
      //         // {
      //         //     label: 'denivele',
      //         //     backgroundColor: 'rgb(0, 0, 0)',
      //         //     borderColor: 'rgb(0, 0, 0)',
      //         //     data: deniveleCumule
      //         //     ,
              
      //         //     fill: true,
      //         //     pointRadius:1
      //         // },
              
      //         {
      //             label: 'frequence cardiaque',
      //             backgroundColor: 'rgb(255, 99, 132)',
      //             borderColor: 'rgb(255, 255, 132)',
      //             hidden: true,
      //            data: HRdataArray,
      
      //             fill: false,
      //             pointRadius:1
      //         }
          
      //     ],
      //     },
      
      //     // Configuration options go here
      //     options: {
      //       scales :  {
      //         xAxes:[{
      //           type:'time',
      //           // distribution:'linear',
      //           distribution:'series',
      //           time:{min:new Date(dateArrayChart[0])}
      //         }]
      //       }
      //     }
      // });
      
      
      
          }

        
   





function trouvePositionLaPlusProche(array,lati,longi)
{
// console.log(lati);
// console.log(longi);
// console.log(array[0]);
let ecartMin=[]
for (const iterator of array) {
  
  ecartMin.push((iterator[0]-lati)*(iterator[0]-lati)+(iterator[1]-longi)*(iterator[1]-longi))
 
}
return ecartMin.indexOf(Math.min.apply(Math,ecartMin));
  // console.log(ecartMin);
  // console.log(object);

} 


function getDistanceFromLatLonInkm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

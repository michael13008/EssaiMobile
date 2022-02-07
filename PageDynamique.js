function temperature(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }        
  
  var SA_tableauTemperature = [];
  
  for (i=0; i<20;i++) {
      SA_tableauTemperature[i] = temperature(-10 , 40);
  }
  
  
  
  
  
  function aleaTab1() {
  
  var temperature1= SA_tableauTemperature[Math.floor(Math.random()*SA_tableauTemperature.length)];
  var contientTemperature1 = document.getElementById('temperature1');
  contientTemperature1.innerHTML=   temperature1;
  var contientConseil1 = document.getElementById('conseil1');

  
  if(temperature1 < 0) {
    contientConseil1.setAttribute("class", "bleu");
     contientConseil1.innerHTML= 'Canalisations gelées, appelez SOS plombiers!!';
  }
  else if  ((temperature1 >= 0) && (temperature1 < 12)) {
    contientConseil1.setAttribute("class", "orange");
    contientConseil1.innerHTML= 'Montez le chauffage ou mettez un gros pull !!';

  }
  else if ((temperature1 <= 22) && (temperature1 < 50)) {
    contientConseil1.setAttribute("class", "orange");
    contientConseil1.innerHTML= 'Baissez votre chauffage!!';

  }

  else if ((temperature1 > 50)) {
    contientConseil1.setAttribute("class", "rouge");
    contientConseil1.innerHTML =  'Appelez les pompiers ou arrêtez votre barbecue !!';

  }
  else  {
    contientConseil1.innerHTML =  'Tout est normal.';
    contientConseil1.setAttribute("class", "vert");


  }
  
  }
  
  
  
  
  
  function aleaTab2() {
  
  var temperature2= SA_tableauTemperature[Math.floor(Math.random()*SA_tableauTemperature.length)];
  var contientTemperature2 = document.getElementById('temperature2');
  contientTemperature2.innerHTML= temperature2   ;
  var contientConseil2 = document.getElementById('conseil2');

  
  if(temperature2 < 0) {
    contientConseil2.setAttribute("class", "bleu");
     contientConseil2.innerHTML= 'Banquise en vue';
  }
  else if (temperature2 > 35) {
    contientConseil2.setAttribute("class", "rouge");
    contientConseil2.innerHTML= 'Hot hot hot !!';

  }
  else  {
    contientConseil2.setAttribute("class", "vert");
    contientConseil2.innerHTML =  ' Rien à signaler';
  
  }
  
  }
  
  setInterval(aleaTab1, 2000);
  setInterval(aleaTab2, 2000);
  
  
  

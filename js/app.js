// Get current time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

var mins = ('0' + today.getMinutes()).slice(-2); 
var hour = document.getElementById('hour');

var time2 = today.getHours() + ":" + mins;
hour.textContent = time2;

// Get current date
var current_day = today.getDate() + "/" + (today.getMonth()+1); console.log(current_day);

// Get current Weather Forecast
const  API_KEY  = 'c223439da3cf98dc3154e24a84dd152f';

function cityWeather(){
    const form = document.getElementById('form'); 
            form.addEventListener('submit', e => {
                e.preventDefault();

                const ville = document.getElementById('input');

                const articlesElt = document.getElementById('articles');

                ajaxGet(`http://api.openweathermap.org/data/2.5/weather?q=${ville.value}&appid=${API_KEY}&lang=fr&units=metric`, function (response) {
                    let meteo = JSON.parse(response); 
                    var div = document.getElementById('articles');
                    var div2 = document.getElementById('weather');
                    var weather = meteo.weather;
                    var degree = meteo.main;

                    
                    var city = document.createElement('h3');
                    city.textContent = meteo.name + " " + meteo.sys.country;
                    div.appendChild(city);

                    var google = document.getElementById('googleSearch');
                    var searchBar = document.createElement('input');
                    searchBar.setAttribute('type', 'text');
                    searchBar.setAttribute('value', "Rechercher avec Google");
                    searchBar.setAttribute('class', "form-control w-100");
                    searchBar.style.margin = "0 auto";
                    google.appendChild(searchBar);


                    const array = weather.forEach(function(element) {
                        var meteoDuJour = document.createElement('h4');
                         meteoDuJour.textContent =  element.description;
                         div.appendChild(meteoDuJour);

                        var maj = document.createElement('p');
                        maj.innerHTML = 'MAJ' + " " + current_day + " " + time2; console.log(maj)
                        div.appendChild(maj);

                         var icons = document.getElementById('icons');

                         if(element.description == "pluie"){
                         icons.innerHTML = "<img src='images/rain.png' alt='' />"; 
                         }
                         else if(element.description == "couvert"){
                            icons.innerHTML = "<img src='images/cloud.png' alt='' />"; 
                         }
                         else if(element.description == "soleil"){
                            icons.innerHTML = "<img src='images/sun.png' alt='' />"; 
                         }
                         else if(element.description == "ciel dégagé"){
                            icons.innerHTML = "<img src='images/ciel.png' alt='' />"; 
                         }
                     })

                    //  Température Celcius
                    
                        var deg = document.createElement('h1');
                        deg.textContent = Math.round(degree.temp) + ' ' + '°';
                        div2.appendChild(deg);
                   
                     form.setAttribute('class', 'hidden');
            })

            ville.value.trim();
            ville.value = '';
   
    })
   
};
 



const apikey = "349b8d64a1378632381a2cff6ea12875";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


  async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    }
    else{

        var data = await response.json();
    
    
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed +" km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src ="./images/cloudy.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src ="./images/cloud.png";
        }
    
        else if(data.weather[0].main == "snow"){
            weathericon.src ="./images/snowy.png";
        }
    
        document.querySelector(".Weather").style.display="block";
        document.querySelector(".error").style.display="none";
        
        
    }
}
      
      searchbtn.addEventListener("click", ()=>{
          checkWeather(searchbox.value);
    
      })
    
    

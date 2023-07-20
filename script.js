const apiKey = "eedd3d1818e4707cac1b44f5633d845c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const backgroundImage = document.querySelector("document.querySelector");


// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city `&appid=${apiKey}`);
//   var data = await response.json();

//   console.log(city);


//    document.querySelector(".city").innerHTML = data.name;
//    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
// }


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        const data = await response.json();
  
    
     
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "svg/clouds.png";
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg')"; 
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "svg/clear.png";
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg')"; 
      } 
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "svg/drizzle.png";
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg')"; 
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "svg/mist.png";
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg')"; 
      }





      

      document.querySelector(".weather").style.display = "block"
      document.querySelector(".error").style.display = "none"
    }



    

    
  }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})





















































//https://api.openweathermap.org/data/2.5/weather?q=patna&appid=&units=metric

// // // const apiKey = "eedd3d1818e4707cac1b44f5633d845";
// // const apiKey = "eedd3d1818e4707cac1b44f5633d845c";
// // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=metric&q=patna";


// // async function checkWeather(){
// //     const response = await fetch(apiUrl + `&appid=${apiKey}`);
// //     var data =  await response.json();
    
// //     console.log(data);
// //     document.querySelector(".city").innerHTML= data.name;
// //     document.querySelector(".temp").innerHTML= data.name.main.temp  + "°C";
// //     document.querySelector(".humidity").innerHTML= data.main.humidity;
// //     document.querySelector(".wind").innerHTML= data.wind.speed;
// // }
// // checkWeather()

// const apiKey = "eedd3d1818e4707cac1b44f5633d845c";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=mathura&appid=eedd3d1818e4707cac1b44f5633d845c&units=metric";

// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   var data = await response.json();

//   console.log(data);
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
// }

// checkWeather();

const apiKey = "eedd3d1818e4707cac1b44f5633d845c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const backgroundImage = document.querySelector(".background-image");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        const data = await response.json();
  
    
        console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


      console.log(data.weather[0].main);

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "svg/clouds.png";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"; 
      } 
      
      else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "svg/clear.png";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"; 
      } 
      
      else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "svg/drizzle.png";
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/311039/pexels-photo-311039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"; 
      } 
      
      else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "svg/mist.png";
        document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/wide-angle-shot-several-trees-road-covered-fog_181624-1213.jpg?w=1380&t=st=1689951690~exp=1689952290~hmac=8f462cfb87ea764187930330549aaa99f98f213ed269026c2d7c37d0d8a20023')"; 
      } 

      else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "svg/rain.svg";
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"; 
      }
      
      
      else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "svg/thunder.svg";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')"; 
      }
      
      else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "svg/mist.png";
        document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/wide-angle-shot-several-trees-road-covered-fog_181624-1213.jpg?w=1380&t=st=1689951690~exp=1689952290~hmac=8f462cfb87ea764187930330549aaa99f98f213ed269026c2d7c37d0d8a20023')"; 
      }

      else if (data.weather[0].main == "Haze" && "Clouds" ) {
        weatherIcon.src = "svg/mist.png";
        document.body.style.backgroundImage = "url('https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PzfE18BkPw6luo7YW7c9XQ.jpeg')"; 
      }
      
      else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "svg/snow.png";
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3462588/pexels-photo-3462588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"; 
      }
      
      else {

        weatherIcon.src = "svg/clear.png"; // Provide a default weather icon
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')";
        // Set a default image or do something else if none of the conditions are met
      }
      
      document.querySelector(".weather").style.display = "block"
      document.querySelector(".error").style.display = "none"
    }
  }
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkWeather(searchBox.value);
  }
});


















































// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city `&appid=${apiKey}`);
//   var data = await response.json();

//   console.log(city);


//    document.querySelector(".city").innerHTML = data.name;
//    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
// }



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

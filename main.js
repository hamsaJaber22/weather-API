let cityName = document.getElementById("cityName");
let weather = document.getElementById("weather");

let results = ``;

let c = prompt("enter the city name ");
let myHttp = new XMLHttpRequest();
const url = `http://api.weatherapi.com/v1/current.json?key=3cfcb3fef8ce4b3e8b3201618212612&q=${c}&aqi=no`;
myHttp.onreadystatechange = function () {
  if (myHttp.readyState == 4 && myHttp.status == 200) {
    let data = JSON.parse(myHttp.responseText);

    results += `
        <div class="two">
           <h2 class = "cityName" > city name: ${data.location.name}</h2>      
           <img alt="image" src="${data.current.condition.icon}"/> 
        </div>
                    <h3 class = "weathers"> temp c : ${data.current.temp_c}</h3> 
                    <h3 class="weathers"> temp f : ${data.current.temp_f} </h3> 
                    <h3 class="weathers"> cloud : ${data.current.cloud} </h3> 
                    <h3 class="weathers"> description : ${data.current.condition.text} </h3>    
                    <h3 class = "time" >${data.location.localtime}</h3>                 
            `;
  }
weather.innerHTML = results;
};
myHttp.open("GET", url);
myHttp.send();

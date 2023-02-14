

async function main(){
    let location=cinput.value
    if(location){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
    response.json().then((data)=> {
        console.log(data);
        displaydata(data)
        tempdata(data)
    })
}
    else{
        alert('Enter the location')
    }
} 

function displaydata(weather){
    htmldata=`
    <div class="row">
    <div class="pricing-column">
      <div class="card bg-transparent">
        <div class="card-header bg-dark">
          <h3 class="text">${weather.name}</h3>
        </div>

        <div class="card-body">
          <h5 class="text">Cloud <span>: ${weather.clouds.all} </span> </h5>
          <h5 class="text">Humidity <span>: ${weather.main.humidity} </span> </h5>
          <h5 class="text">Wind <span >: ${weather.wind.speed} </span></h5>
          <h5 class="text">Pressure <span >: ${weather.main.pressure} </span></h5>

        </div>
      </div>
    </div>
</div>
    `
    leftcontent.innerHTML = htmldata

 

}

function tempdata(temperature){
    maindata=`
    <div id="mainicon">
                <h1 ><span class="icon"> <img class="iconimg"  src='http://openweathermap.org/img/w/${temperature.weather[0].icon}.png'> </span> </h1>
            </div>
            <div id="temp">
                <h1 style="font-size:1 rem">${temperature.main.temp} &#8451; </h1>
                <h5 class="text">Feels like ${temperature.main.feels_like}  &#8451;</h5>
                <h4 class="text">${temperature.weather[0].main}</h4>
                <h2 class="text">${temperature.name}</h2>
                <h5 class="text">${temperature.sys.country}</h5>
            </div>
    `
    maincol.innerHTML = maindata
}

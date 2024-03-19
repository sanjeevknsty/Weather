cityName = document.getElementById("cityName");
searchCity = document.getElementById("search_city")
city_name = document.getElementById("city_name")
temp_val_K= document.getElementById("temp_val_K")
tempStatus = document.getElementById("temp_status")
dataHide = document.querySelector(".middle_layer")


const Info = async (event)=>{
  event.preventDefault();
  const city = cityName.value;
  if(city == ""){
    city_name.innerText = `Enter City Nametemp_val_K`
    dataHide.classList.add('data_hide')
  }
  else{
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b869dfb988bcb686d5f557803d11bce1`
    const response = await fetch(url);
    const data = await response.json()
    const arrData =[data]
    console.log(data)
      city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
      temp_val_K.innerText = `${arrData[0].main.temp}`
    tempStatus.innerText=`${arrData[0].weather[0].main}`

    dataHide.classList.remove('data_hide')
    }
    catch(error){
      city_name.innerText = `Enter City Name Properly`
      dataHide.classList.add('data_hide')
    }
  }
}


searchCity.addEventListener("click",Info)

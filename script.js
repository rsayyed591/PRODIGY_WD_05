const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '570b86dafdmsh0d1e1c3b0b6d501p12db1bjsnd77068d5011b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const formatUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
};
const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            const formattedSunrise = formatUnixTimestamp(response.sunrise);
            sunrise.innerHTML = formattedSunrise;       
            const formattedSunset = formatUnixTimestamp(response.sunset);
            sunset.innerHTML = formattedSunset;
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const submit = document.getElementById("submit");
const cityInput = document.getElementById("cityInput");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value; 
    getWeather(city);
});


const getWeather1 = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            shcloud_pct.innerHTML = response.cloud_pct 
            shfeels_like.innerHTML = response.feels_like 
            shhumidity.innerHTML = response.humidity 
            shmax_temp.innerHTML = response.max_temp 
            shmin_temp.innerHTML = response.min_temp 
            const formattedSunrise = formatUnixTimestamp(response.sunrise);
            shsunrise.innerHTML = formattedSunrise;       
            const formattedSunset = formatUnixTimestamp(response.sunset);
            shsunset.innerHTML = formattedSunset;
            shtemp.innerHTML = response.temp 
            shwind_degrees.innerHTML = response.wind_degrees 
            shwind_speed.innerHTML = response.wind_speed 
        })
        .catch(err => console.error(err));
}

const getWeather2 = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            bocloud_pct.innerHTML = response.cloud_pct 
            bofeels_like.innerHTML = response.feels_like 
            bohumidity.innerHTML = response.humidity 
            bomax_temp.innerHTML = response.max_temp 
            bomin_temp.innerHTML = response.min_temp 
            const formattedSunrise = formatUnixTimestamp(response.sunrise);
            bosunrise.innerHTML = formattedSunrise;       
            const formattedSunset = formatUnixTimestamp(response.sunset);
            bosunset.innerHTML = formattedSunset; 
            botemp.innerHTML = response.temp 
            bowind_degrees.innerHTML = response.wind_degrees 
            bowind_speed.innerHTML = response.wind_speed 

        })
        .catch(err => console.error(err));
}
const getWeather3 = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            kocloud_pct.innerHTML = response.cloud_pct 
            kofeels_like.innerHTML = response.feels_like 
            kohumidity.innerHTML = response.humidity 
            komax_temp.innerHTML = response.max_temp 
            komin_temp.innerHTML = response.min_temp 
            const formattedSunrise = formatUnixTimestamp(response.sunrise);
            kosunrise.innerHTML = formattedSunrise;       
            const formattedSunset = formatUnixTimestamp(response.sunset);
            kosunset.innerHTML = formattedSunset; 
            kotemp.innerHTML = response.temp 
            kowind_degrees.innerHTML = response.wind_degrees 
            kowind_speed.innerHTML = response.wind_speed  
        })
        .catch(err => console.error(err));
}

const getWeather4 = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            lucloud_pct.innerHTML = response.cloud_pct 
            lufeels_like.innerHTML = response.feels_like 
            luhumidity.innerHTML = response.humidity 
            lumax_temp.innerHTML = response.max_temp 
            lumin_temp.innerHTML = response.min_temp 
            const formattedSunrise = formatUnixTimestamp(response.sunrise);
            lusunrise.innerHTML = formattedSunrise;       
            const formattedSunset = formatUnixTimestamp(response.sunset);
            lusunset.innerHTML = formattedSunset; 
            lutemp.innerHTML = response.temp 
            luwind_degrees.innerHTML = response.wind_degrees 
            luwind_speed.innerHTML = response.wind_speed  
        })
        .catch(err => console.error(err));
}

getWeather1("Shangai")
getWeather2("Boston")
getWeather3("Kolkata")
getWeather4("Lucknow")
getWeather("Delhi")

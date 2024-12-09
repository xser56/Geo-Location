import { APIKEY } from "./environment.js"
//navigator returns the geo location object
//get current position returns the current position of the user



navigator.geolocation.getCurrentPosition(success, errorFunc);
//like and if else statement. "successs" = if, "efforFunc" = else
{
    coords: 
    {
        latitude: 37.7749;
        longitude: -122.4194;
    }
}

function success(position)
{
    console.log(position);
    console.log("Our latitude is:" + position.coords.latitude);
    console.log("Our longitude is:" + position.coords.longitude);
}
success();

function errorFunc(error)
{
    console.log("Error.message");
}

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}
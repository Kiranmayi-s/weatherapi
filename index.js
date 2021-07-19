
 
function display(){
    let city = document.getElementById('myText').value;
    document.getElementById('myText').value ="";
    document.getElementById('body').innerHTML ="";
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=51a0780cc3e7ff809ccc53e63dba4764")
.then(function (Data1){
    return Data1.json()
})
.then(function(data){
   
    let temp = data.main.temp;
    let description = data['weather'][0]['description'];
    let icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    let feels = data.main.feels_like;

    document.getElementById('city').innerHTML = "City :  " + (city.charAt(0).toUpperCase()+ city.slice(1));
    document.getElementById('temp').innerHTML = "Temperature : " + (Math.floor(temp-273.1)+"°C");
    document.getElementById('desc').innerHTML = "Weather condition :  " + (description.charAt(0).toUpperCase()+ description.slice(1));
    document.getElementById('feelslike').innerHTML = "Feels Like : " + (Math.floor(feels-273.1)+"°C");
    console.log(icon);
    var img = document.createElement('img'); img.setAttribute("id","image")
    img.src = icon;
    document.getElementById('body').appendChild(img);
})
.catch(function(error){
    alert('Please enter a valid city name')
})
}

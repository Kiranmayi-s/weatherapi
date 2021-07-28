function display(){
              
  //getting city name from text box and concatinating in th link
    let city = document.getElementsByClassName('myText')[0].value;
    document.getElementsByClassName('myText')[0].value ="";
    document.getElementsByClassName('body')[0].innerHTML ="";
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=51a0780cc3e7ff809ccc53e63dba4764")
.then(function (Data1){
    return Data1.json()
})
.then(function(data){
   //getting all the required info
    let temp = data.main.temp;
    let description = data['weather'][0]['description'];
    let icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    let feels = data.main.feels_like;
//diplaying data using classname
    document.getElementsByClassName('main')[0].innerHTML = "City :  " + (city.charAt(0).toUpperCase()+ city.slice(1));
    document.getElementsByClassName('main')[1].innerHTML = "Temperature : " + (Math.floor(temp-273.1)+"°C");
    document.getElementsByClassName('main')[2].innerHTML = "Weather condition :  " + (description.charAt(0).toUpperCase()+ description.slice(1));
    document.getElementsByClassName('main')[3].innerHTML = "Feels Like : " + (Math.floor(feels-273.1)+"°C");
    console.log(icon);
    var img = document.createElement('img'); img.setAttribute("class","image")
    img.src = icon;
    document.getElementsByClassName('body')[0].appendChild(img);
})
.catch(function(error){
    //alert if city name is not valid
    alert('Please enter a valid city name')
})
}

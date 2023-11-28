var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var countries = JSON.parse(request.response);
    
    countries.forEach(c => {console.log("Name : ", c.name.common), console.log("Capital : ", c.capital), console.log("Flag Link : ", c.flags.png)});
}
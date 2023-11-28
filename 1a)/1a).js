var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var countries = JSON.parse(request.response);
    var countriesFromAsia = countries.filter(c => c.region == "Asia");

    console.log(`The countries that are from Asia Region are: 
    -----------------------------------------------------------------------`);
    countriesFromAsia.map(c => console.log(c.name.common));
}
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var countries = JSON.parse(request.response);
    var lessPopulatedCountries = countries.filter(c => c.population < 200000);

    console.log(`The countries with the population less than 2 lakhs are: 
    -----------------------------------------------------------------------`);
    lessPopulatedCountries.map(c => console.log(c.name.common));
}
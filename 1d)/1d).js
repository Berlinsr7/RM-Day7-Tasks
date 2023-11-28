var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var countries = JSON.parse(request.response);
    var population = countries.map(ele => ele.population);
     var totalPopulation = population.reduce((acc,c) => acc+c);

    console.log("The total population of all the countries is: ", totalPopulation);
}
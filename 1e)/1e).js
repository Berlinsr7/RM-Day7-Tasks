var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var countries = JSON.parse(request.response);
    var res = [];
    for(var i in countries)
    {
        if('currencies' in countries[i])
        {
            if('USD' in countries[i].currencies)
            {
                res.push(countries[i].name.common);
            }
        }                
    }
    console.log("The list of countries that has USD as their currency are: ", res);
}
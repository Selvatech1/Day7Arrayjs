// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);

    // Get all countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // Print name, capital, and flag using forEach function
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.png);
    });

    // Calculate the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);

    // Find the country that uses US dollars as currency
    const countryWithUSD = data.find(country => {
      const currencies = Object.values(country.currencies);
      return currencies.includes('USD');
    });
    console.log('Country that uses US dollars:', countryWithUSD);
  })
  .catch(error => console.log('Error fetching data:', error));

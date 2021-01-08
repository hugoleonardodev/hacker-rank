const fetch = require("node-fetch");

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  let pageNumber = 0;
  const countries = [];
  while (pageNumber < 26 ) {
    await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`)
      .then(response => response.json())
      .then(object => object.data.forEach(element => {
        const countryData = {
          name: element.name,
          code: element.alpha2Code,
      };
      countries.push(countryData);
      }));
    if (countries.filter(e => e.code !== code)) {
      pageNumber += 1;
      const result = countries.filter(a=> a.code === code).map(e => e.name);
      console.log(result.join(''));
    } else if (countries.filter(e => e.code === code)) {
      pageNumber += 1;
    }
  }
} 


// console.log(getCountryName('AF'));

console.log(getCountryName('ZW'));
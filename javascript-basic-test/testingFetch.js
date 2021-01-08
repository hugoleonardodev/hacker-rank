const fetch = require("node-fetch");
// const request = require('request');

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  let pageNumber = 0;
  const countries = [];
  for (let index = 1; index < 26; index += 1) {
    await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${index}`)
      .then(response => response.json())
      .then(object => object.data.forEach(element => {
        const countryData = {
          name: element.name,
          code: element.alpha2Code,
      };
      countries.push(countryData);
      // pageNumber += 1;
      }));
  }
    const result = countries.filter(a=> a.code === code).map(e => e.name);
    return result.join('');
} 

console.log(getCountryName('AF'));

// console.log(getCountryName('ZW'));

// console.log(getCountryName('AX'));
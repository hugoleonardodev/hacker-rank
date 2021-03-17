/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */
const HOME_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>';
const HOME_URL_DATA =
  'https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=barcelona&page=1';
const VISITING_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>';
const VISITING_URL_DATA =
  'https://jsonmock.hackerrank.com/api/football_matches?name=<name>&year=<year>';
async function getTotalGoals(team, year) {}

const https = require('https');

https.get(VISITING_URL_DATA, (res) => {
  res.setEncoding('utf8');
  let body = '';
  res.on('data', (data) => {
    body += data;
  });
  res.on('end', () => {
    body = JSON.parse(body);
    console.log(body);
  });
});
// case 0
// getTotalGoals('Barcelona', 2011) expected 35 goals

// wrap your https request in a Promise
const asPropmise = (url) =>
  new Promise((resolve, reject) => {
    https.get(VISITING_URL_DATA, (res) => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', (data) => {
        body += data;
      });
      res.on('end', () => {
        body = JSON.parse(body);
        resolve(body);
      });
    });
  });

// consume your promise
Promise.all([
  asPropmise(VISITING_URL_DATA),
  asPropmise(HOME_URL_DATA),
]).then((res) => console.log(res)); // an array of responses

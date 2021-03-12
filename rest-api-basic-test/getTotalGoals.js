const https = require('https');
const fs = require('fs');
const path = require('path');

const HOME_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>';
const VISITING_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>';
const COMPETITIONS_URL =
  'https://jsonmock.hackerrank.com/api/football_competitions?name=<name>&year=<year>';

let COMPETITION_DATA = [];
let HOME_DATA;
let VISITING_DATA;

const getCompetitionData = (competition, year) => {
  // https.get(
  //   `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`,
  //   (res) => {
  //     res.setEncoding('utf-8');
  //     let body;
  //     res.on('data', (data) => {
  //       body += data;
  //     });
  //     res.on('end', () => {
  //       COMPETITION_DATA += JSON.parse(body);
  //     });
  //   },
  // );
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`,
      (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (data) => {
          body += data;
        });
        res.on('end', () => {
          body = JSON.parse(body);
          resolve(body);
        });
      },
    );
  });
};

// function getWinnerTotalGoals(competition, year) {} // 35 goals

getCompetitionData('Uefa Champions League', 2011).then((data) => {
  console.log(data);
  COMPETITION_DATA.push(data);
  fs.writeFile(path.join(__dirname, '.', 'data.json'), data, 'utf8');
});
console.log(COMPETITION_DATA);

// const data = Promise.resolve(
//   getCompetitionData('Uefa Champions League', 2011),
// ).then((data) => data);

// console.log(data);

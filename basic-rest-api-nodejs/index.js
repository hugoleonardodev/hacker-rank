const https = require('https');
const fs = require('fs');

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
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`,
      (response) => {
        // response.setEncoding('utf-8');
        let body;
        response.on('data', (data) => {
          console.log(data.toString());
          return resolve(data.toString());
        });
        response.on('end', () => {
          console.log('end');
        });
      },
    );
  });
};

// function getWinnerTotalGoals(competition, year) {} // 35 goals

const promise1 = getCompetitionData('Uefa Champions League', 2011);

promise1
  .then((result) => result)
  .then((result) => console.log(result))
  .catch((error) => console.log('Deu Ruim!', error));

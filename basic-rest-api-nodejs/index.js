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
        response.on('data', (data) => {
          console.log('>>>>>>>>>>>> competition data', data.toString());
          return resolve(data.toString());
        });
        response.on('end', () => {
          console.log('end getCompetitionData');
        });
      },
    );
  });
};

const getTeamHomeDataPage0 = (teamData) => {
  const { winner, year } = teamData.data[0];
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${winner}&page=0`,
      (response) => {
        response.on('data', (data) => {
          console.log('>>>>>>>>>>>> home data', data.toString());
          return resolve(
            JSON.stringify({ data: data.toString(), winner, year }),
          );
        });
        response.on('end', () => {
          console.log('end getTeamHomeDataPage0');
        });
      },
    );
  });
};

const getTeamDataPage = (team, year, page) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}`,
      (response) => {
        response.on('data', (data) => {
          return resolve(data.toString());
        });
        response.on('end', () => {
          console.log(`end getTeamDataPage(${team}, ${year}, ${page})`);
        });
      },
    );
  });
};

const getAllPagesData = (teamDataPage0) => {
  console.log('getAllPagesData', JSON.parse(teamDataPage0));
  const { data, winner, year } = JSON.parse(teamDataPage0);
  const { total_pages } = JSON.parse(data);
  console.log('total pages', total_pages);
  const allData = [];

  for (let i = 1; i <= total_pages; i += 1) {
    let promise = getTeamDataPage(winner, year, i);
    allData.push(promise);
  }

  const allPagesData = Promise.all(allData)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      // handle errors here
    });

  return new Promise((resolve, reject) => {
    return resolve(allPagesData);
  });
};
// function getWinnerTotalGoals(competition, year) {} // 35 goals

const promise1 = getCompetitionData('Uefa Champions League', 2011);

promise1
  .then((result) => JSON.parse(result))
  .then((result) => getTeamHomeDataPage0(result).then((result) => result))
  .then((result) => getAllPagesData(result).then((result) => result))
  .then((result) => result)
  .then((result) =>
    console.log('   >>>>>>>>>>   DEU BOM!  <<<<<<<<<<   ' + result),
  )
  .catch((error) =>
    console.log('   >>>>>>>>>>   DEU RUIM!  <<<<<<<<<<   ', error),
  );

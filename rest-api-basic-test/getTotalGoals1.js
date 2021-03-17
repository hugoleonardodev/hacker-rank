const https = require('https');
const fs = require('fs').promises;
const path = require('path');

const HOME_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>';
const VISITING_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>';
const COMPETITIONS_URL =
  'https://jsonmock.hackerrank.com/api/football_competitions?name=<name>&year=<year>';

// var COMPETITION_DATA = [];
let HOME_DATA;
let VISITING_DATA;

const getCompetitionData = (competition, year) => {
  callback = function (response) {
    var str = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
      fs.writeFile('competition-data.json', str);
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log(str);
    });
  };

  https
    .get(
      `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`,
      callback,
    )
    .end();
};

// getCompetitionData('Uefa Champions League', 2011);

const getHomeDataPages = (homeTeam, year, page = 0) => {
  getCompetitionData('Uefa Champions League', 2011);
  callback = function (response) {
    var homeData = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      homeData += chunk;
      fs.writeFile('home-data-pages.json', homeData);
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log(homeData);
    });
  };

  https
    .get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${homeTeam}&page=${page}`,
      callback,
    )
    .end();
};

// getHomeDataPages('Chelsea', 2011);

const getAllHomeData = async (homeTeam, year) => {
  getHomeDataPages(homeTeam, year);
  const home = await fs.readFile('home-data-pages.json');
  const { total_pages } = JSON.parse(home);
  console.log(total_pages);
  callback = async (response) => {
    var json = '';
    var allHomeData = await fs.readFile('home-data-pages.json');
    console.log('allHomeData', allHomeData);
    var { data } = JSON.parse(allHomeData);
    console.log('data', data);

    //another chunk of data has been received, so append it to `str`
    response.on('data', async function (chunk) {
      json += chunk;
      fs.writeFile('data.json', json);
      var dataJson = await fs.readFile('home-data.json');
      console.log('dataJson', dataJson);
      var newPage = JSON.parse(dataJson);
      console.log('dataJson', newPage);

      data = [...data, ...newPage.data];
      console.log('data2', data);

      fs.writeFile('new-home-data.json', JSON.stringify(data));
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log(allHomeData);
    });
  };
  for (let i = 1; i < total_pages; i += 1) {
    https
      .get(
        `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${homeTeam}&page=${i}`,
        callback,
      )
      .end();
  }
};

getAllHomeData('Chelsea', 2011);

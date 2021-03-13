const https = require('https');

const HOME_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>';
const VISITING_URL =
  'https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>';
const COMPETITIONS_URL =
  'https://jsonmock.hackerrank.com/api/football_competitions?name=<name>&year=<year>';

const getCompetitionData = (competition, year) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`,
      (response) => {
        // response.setEncoding('utf-8');
        response.on('data', (data) => {
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

const getTeamHomeDataPage = (team, year, page) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}`,
      (response) => {
        response.on('data', (data) => {
          return resolve(data.toString());
        });
        response.on('end', () => {
          console.log(`end getTeamHomeDataPage(${team}, ${year}, ${page})`);
        });
      },
    );
  });
};

const getAllTeamHomePagesData = (teamDataPage0) => {
  const { data, winner, year } = JSON.parse(teamDataPage0);
  const { total_pages } = JSON.parse(data);
  const allData = [];

  for (let page = 1; page <= total_pages; page += 1) {
    let promise = getTeamHomeDataPage(winner, year, page);
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

const getTotalScoreFromData = (allPages) => {
  return new Promise((resolve, reject) => {
    const totalHomeScore = JSON.parse(...allPages);
    const { data } = totalHomeScore;
    const { team2, year } = data[0];
    const allScores = data.map((game) => parseInt(game.team2goals));
    const totalScore = allScores.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    });
    resolve(JSON.stringify({ team2, year, homeTotalScore: totalScore }));
  });
};

const getTeamVisitingDataPage0 = (teamDataString) => {
  const { team2, year, homeTotalScore } = JSON.parse(teamDataString);
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team2}&page=0`,
      (response) => {
        response.on('data', (data) => {
          return resolve({
            homeTotalScore,
            team2,
            year,
            data: data.toString(),
          });
        });
        response.on('end', () => {
          console.log(
            `end getTeamVisitingDataPage0(${team2}, ${year}, ${homeTotalScore})`,
          );
        });
      },
    );
  });
};

const getTeamVisitingDataPage = (team1, year, page, homeTotalScore) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}&page=${page}`,
      (response) => {
        response.on('data', (data) => {
          return resolve(
            JSON.stringify({
              data: data.toString(),
              team1,
              year,
              homeTotalScore,
            }),
          );
        });
        response.on('end', () => {
          console.log(`end getTeamHomeDataPage(${team1}, ${year}, ${page})`);
        });
      },
    );
  });
};

const getAllTeamVisitingPagesData = (teamDataPage0) => {
  const { data, homeTotalScore, team2, year } = teamDataPage0;
  const games = JSON.parse(data);
  const { total_pages } = games;
  const allData = [];

  for (let page = 1; page <= total_pages; page += 1) {
    let promise = getTeamVisitingDataPage(team2, year, page, homeTotalScore);
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
    return resolve({ data: resolve(allPagesData), homeTotalScore });
  });
};

const getTotalScoreFromData2 = (allPagesArray) => {
  return new Promise((resolve, reject) => {
    const data = allPagesArray.map((data) => JSON.parse(data));
    const { homeTotalScore } = data[0];
    const pages = data.map((page) => JSON.parse(page.data));
    const pagesData = pages.map((pages) => pages.data);
    const allScores = pagesData.flat().map((game) => parseInt(game.team1goals));
    const visitingTotalScore = allScores.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    });
    resolve(
      JSON.stringify({ totalScore: visitingTotalScore + homeTotalScore }),
    );
  });
};
// function getWinnersCompetitionTotalGoals(competition, year) {} // 35 goals
// just goals for the given competition

const promise1 = getCompetitionData('Uefa Champions League', 2011);

promise1
  .then((result) => JSON.parse(result))
  .then((result) => getTeamHomeDataPage0(result).then((result) => result))
  .then((result) => getAllTeamHomePagesData(result).then((result) => result))
  .then((result) => getTotalScoreFromData(result).then((result) => result))
  .then((result) => getTeamVisitingDataPage0(result).then((result) => result))
  .then((result) =>
    getAllTeamVisitingPagesData(result).then((result) => result),
  )
  .then((result) => getTotalScoreFromData2(result).then((result) => result))
  .then((result) =>
    console.log('   >>>>>>>>>>   DEU BOM!  <<<<<<<<<<   ', result),
  )
  .catch((error) =>
    console.log('   >>>>>>>>>>   DEU RUIM!  <<<<<<<<<<   ', error),
  );

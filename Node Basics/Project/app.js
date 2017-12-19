
const https = require('https');

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
  console.log(message);
}

function getProfile(username) {

  // Connect to API URL (https://teamtreehouse.com/username.json)
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
    // Read the data
    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () => {
      // Parse the data
      const profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);

    })
    // Print the data
  })
}

const users = process.argv.slice(2);

users.forEach(getProfile);

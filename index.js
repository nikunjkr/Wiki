var ProgressBar = require('progress');
const fs = require('fs');
const fetch= require('node-fetch');


// Progress Bar//
var bar = new ProgressBar(':bar', { total: 100 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);


// Base URL of wiki
var base_url = "https://en.wikipedia.org/wiki/"
// API

var url = "https://en.wikipedia.org/w/api.php"; 
// parameters to query
var search_term = process.argv[2];
var params = {
    action: "query",
    list: "search",
    srsearch: search_term,
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});


fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        if (response.query.search[0].title === search_term){
          console.log("Link Fetched! Writing in Progress");
          
          fs.writeFile(process.argv[3],base_url+search_term.replace(" ","_") ,function (err) {
            if (err) return console.log(err);
            
          });
            
        }
    })
    .catch(function(error){console.log(error);});



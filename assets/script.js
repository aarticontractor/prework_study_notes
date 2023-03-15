var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function onButtonClick(id_given_by_html) {
  if (id_given_by_html === 'html') {
    location.replace("https://html.com/document/");
  } else if (id_given_by_html == "css") {
    location.replace("https://www.w3schools.com/css/");
  } else if (id_given_by_html == "git") {
    location.replace("https://github.com/");
  } else if (id_given_by_html == "js") {
    location.replace("https://www.javascript.com/");
  } else {
    console.log("Incorrect call");
  }
}


function selectTopic() {
  if (randomTopic === 'HTML') {
 console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
 console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
 console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
 console.log("Let's study JavaScript!");
  } else {
 console.log('Please try again!');
  }
}


// console.log('Here are the topics we learned through Prework:');
listTopics();
// console.log('Which topic should we study first?');
selectTopic();






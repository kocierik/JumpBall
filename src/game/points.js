let points = 0;
let record;

function pointGame() {
  points += 1;
  divPoints.innerHTML = divPoints.html("score: " + points, false);
}

function checkRecord() {
  if (points > record) {
    divRecord.innerHTML = divRecord.html("record: " + points, false);
    window.localStorage.setItem("record", points);
  } else {
    divRecord.innerHTML = divRecord.html("record: " + record, false);
  }
}

function savePoints() {
  points = parseInt(window.localStorage.getItem("pointsPause"), 10);
  record = parseInt(window.localStorage.getItem("record"), 10);
}

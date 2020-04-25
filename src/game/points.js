let points = 0;
let record;

function pointGame(){
    points += 1;
   // divPoints.innerHTML = divPoints.html('score: ' + points, false);
}

function checkRecord(){
    if(points > record ){
  //      divRecord.innerHTML = divRecord.html('record: ' + points, false);
        window.storeItem('record',points);
    }
    else{
  //      divRecord.innerHTML = divRecord.html('record: ' + record, false);
    }
}

function savePoints(){
    const condition = performance.navigation.type === 1;
    condition ? points = 0 : points = window.getItem('pointsPause');
    record = window.getItem('record');
}
let getList = [];
let count = 0;
let obj;


loadDB(() => {
    rankBtn();
})

function rankBtn(){
    for(let x = 0;x<5;x++){
        document.getElementById("no"+0).innerHTML = "No record";
    }
    getTheList();
}

function loadDB(callback) {
    obj = []
    if (callback != undefined) {
        db.on('value', (dbValue) => {   
            dbValue.forEach((childdbValue) => {
                let data = childdbValue.val();
                obj.push(data)
                
            })
            callback();
        })
    }
}

function compare(a,b) {
    if (a.score < b.score)
      return 1;
    if (a.score > b.score)
      return -1;
    return 0;
  }

function getTheList() {

    obj.sort(compare);


    if(obj.length==1){
        document.getElementById("no0").innerHTML = obj[0].name +" : "+ obj[0].score;
    }else if(obj.length==2){
        document.getElementById("no0").innerHTML = obj[0].name +" : "+ obj[0].score;
        document.getElementById("no1").innerHTML = obj[1].name +" : "+ obj[1].score;
    }else if(obj.length==3){
        document.getElementById("no0").innerHTML = obj[0].name +" : "+ obj[0].score;
        document.getElementById("no1").innerHTML = obj[1].name +" : "+ obj[1].score;
        document.getElementById("no2").innerHTML = obj[2].name +" : "+ obj[2].score;
    }else if(obj.length==4){
        document.getElementById("no0").innerHTML = obj[0].name +" : "+ obj[0].score;
        document.getElementById("no1").innerHTML = obj[1].name +" : "+ obj[1].score;
        document.getElementById("no2").innerHTML = obj[2].name +" : "+ obj[2].score;
        document.getElementById("no3").innerHTML = obj[3].name +" : "+ obj[3].score;
    }else{
        for(let x = 0;x<5;x++){
            document.getElementById("no"+0).innerHTML = obj[x].name +" : "+ obj[x].score;
        }
    }

    console.log(obj);
}
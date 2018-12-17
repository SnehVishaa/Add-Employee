const csvFilePath='height.csv'

const csv=require('csvtojson')

var arr = []

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

    for(i=0 ; i< jsonObj.length ; i++)
    {
    arr[i]=jsonObj[i].height
    console.log(arr[i]);
    }
   // i++;
    //count++;
    //range(count, jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})

/*var JSONObj = {};

function range(count,jsonObj){
    var upper=180;
    var lower=150;
    distance=5;


  /*  for(i=0; i<count; i++){
       if(jsonObj.value >= lower && jsonObj.value <= lower + distance){
          
       }
    }*/
//}

 
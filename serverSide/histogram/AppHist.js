
var count=function(val,data)
{	
	
	for(var i=0; i<data[0].values.length; i++)
	  {
		var list=data[0].values[i].x.split('-');
		
		var lb=parseInt(list[0]);
		var ub=parseInt(list[1]);
		
		if(val>=lb && val<=ub)
		  {
			
			data[0].values[i].details.push(val);
			data[0].values[i].y+=1;
			break;
		  }
		
	  }
	
	return data;
	
	
}




var myget=function(app,fname){

	const csv=require('csvtojson');
	app.get('/', function(req,res)
	{
		var val=0;
		csv()
	
		.fromFile(fname)

		.then((jsonObj)=>{

			console.log(jsonObj);
			//console.log()
		        var l=150;
		        var cnt=5;
        		var u=l+cnt;
		        var data=[{
				label:'Histogram',
                	        values:[],
		                }];
		        var label="";
		        for(var i=0;u<=180 ; i++)
		          {
        		        label=l+"-"+u;
				var xy={};
				xy.x=label;
				xy.y=0;
				xy.details=[]
		                data[0].values.push(xy);
				

		                l=u+1;
                		u=u+cnt;
		          }

			console.log("\n");
			for(var i=0; i<jsonObj.length; i++)
			  {
				val=jsonObj[i].Height;
				
				data=count(val,data)
				
			  }
			
			
			//console.log("Lengthn of jsonObj : ");
			console.log(data);
			
			
		    	res.send(JSON.stringify(data));

    
	
		})
		
	});

};
exports.myget=myget;

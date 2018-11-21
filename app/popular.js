const googleTrends = require('google-trends-api');


 googleTrends.interestOverTime({
  keyword: 'icejjfish',
  startTime: new Date(Date.now() - (6 * 60 * 60 * 1000)),
  granularTimeResolution: true,
   }, function(err, results) {
  if (err) 
   console.log('oh no error!', err);
  else 
   var r = JSON.parse(results);

   total = 0;
   for(var i in r.default.timelineData){
      var values = r.default.timelineData[i].value;
      total += parseFloat(values)
   }

   var avg = Number((total / i).toFixed(1));

   if(avg >= 50){
      document.getElementById("popular").style.textShadow = "0 0 10px #ff9900 !important";
   }else if(avg >= 80){
      document.getElementById("popular").style.textShadow = "0 0 20px #ff9900 !important";

   }else if(avg <=40){

      document.getElementById("popular").style.color = "blue !important";

   }
   var styleSheetList = document.styleSheets;
   console.log(avg + styleSheetList);

 });

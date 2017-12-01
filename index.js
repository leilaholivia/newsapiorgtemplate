/* global $  APIKEY*/

$(document).ready(function(){
  $.ajax({
  method: "GET",
  url: "https://newsapi.org/v2/sources?",
  data: { category: "Business", country:"us", language: "en", apiKey: APIKEY },
  success: function(data){
      if (data.status == 'ok'){
          // alert(data.status)
   
          for ( var i=0 ; i< data.sources.length; i++){
              
              var source = document.createElement("OPTION");
              source.setAttribute("value", data.sources[i].id);
                source.innerHTML = data.sources[i].name;
                document.getElementById("selection").appendChild(source);
                
                
          }
      }

  }
  })
});
  
 
document.getElementById("submitB").onclick = function(event){
  event.preventDefault();
    var sourcesVar =document.getElementById("selection").value;
    $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
     data: {sources:sourcesVar , apiKey: APIKEY },
      success: function(data){
         console.log(data.articles[0].title);
        if (data.status == 'ok'){
          console.log(data.articles[0].title);
          for (var i=0; i<=5; i++){
            console.log(data.articles[i].title);
            var headline = document.createElement("li");
            headline.innerHTML=data.articles[i].title;
            document.getElementById("headlines").appendChild(headline)
          }
        }
      }
    })};








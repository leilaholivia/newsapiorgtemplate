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
        if (data.status == 'ok'){
          
          //To show bulleted list of headlines only
          /*for (var i=0; i<=data.articles[i].length; i++){
            console.log(data.articles[i].title);
            var headline = document.createElement("li");
            headline.innerHTML=data.articles[i].title;
            document.getElementById("headlines").appendChild(headline)
          }*/
          
          for(var j = 0; j< data.articles.length;j++){
            console.log(data.articles[j].title);
            
            var card= document.createElement("DIV");
            card.setAttribute("id", "divCard");
            card.setAttribute("class", "card");
            //card.setAttribute("style", "width:400px")
            document.body.appendChild(card);
            
            var cardImage = document.createElement("IMG");
            cardImage.setAttribute("class","card-img-top");
            var ImageSource = data.articles[j].urlToImage;
            cardImage.setAttribute("src", ImageSource);
            cardImage.setAttribute("height", "150px");
            cardImage.setAttribute("width", "220px"); 
            card.setAttribute("alt", "news story image");
            card.appendChild(cardImage);
            
            var cardInner = document.createElement("DIV");
            cardInner.setAttribute("class", "card-body");
            card.appendChild(cardInner);
            
            var articleHeader = document.createElement("H4");
            articleHeader.setAttribute("class", "card-title");
            articleHeader.innerHTML= data.articles[j].title;
            cardInner.appendChild(articleHeader);
            
            var articleDescription = document.createElement("p");
            articleDescription.setAttribute("class", "card-text");
            articleDescription.innerHTML= data.articles[j].description;
            cardInner.appendChild(articleDescription);
            
             var viewArticle = document.createElement("A");
             var articleLink = data.articles[j].url;
             viewArticle.setAttribute("href",  articleLink);
             viewArticle.setAttribute("class", "btn btn-primary");
             viewArticle.innerHTML="Read Story";
             cardInner.appendChild(viewArticle);
             var articleSeparation = document.createElement("BR");
             cardInner.appendChild(articleSeparation);
           
          }
          
        }
      }
    })
  
};








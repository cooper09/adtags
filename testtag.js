(function() {
    // Generic IFFY function which is the heart and soul of all ad-tags (although no one ever seems to mention that...)
    console.log("Tag you're it 2");
    document.getElementById('my-ad').innerHTML = '<div>Ad</div>';

    const adkey = function getKey()  {
        console.log('get key');
        return "xxxxxxx";
    }

    const adData = function getData(adkey) {
        console.log("Getting data with key: ", adkey);
        var dataArr = ['a','b','c'];
        return dataArr;
    }

    const displayAd = function showAd(adData) {
       console.log("displayAd: ", adData ); 
       var myAd = document.createElement('img');
       myAd.src = 'http://www.cooper.industrialrd.com/ads/leaderboard.jpg';
       document.body.appendChild(myAd);
       document.getElementById("my-ad").appendChild(myAd);
       return "Ad complete";
    };

    const articleData = function articles (adkey ) {
        console.log("Display Article List: ", adkey)
        articleArr = ['article one','article two','article three']
        return articleArr;
    }

    const displayArticles = function showArticles(articleData) {
        console.log('displayArticles: ', articleData )

        var articleHTML = []; 
        
        for(var i = 0 ; i < articleData.length ; ++i ){
            console.log("article title: ", articleData[i] );  
            var myDiv = "artDiv"+i;
            myDiv = document.createElement("div");  
            document.getElementById("articles").appendChild(myDiv);
            var articlelnk =  "articlelnk" + i;
            articlelnk  = document.createElement('a');
            var article = "article"+i;
            article = document.createTextNode(articleData[i]);
            articlelnk.setAttribute('href', "http://yahoo.com");
            articlelnk.setAttribute('target', '_blank');
            articlelnk.appendChild(article);
            myDiv.appendChild(articlelnk);

            articleHTML.push( myDiv.getData );

         }//end for
    
        return articleHTML;
    };

    console.log("Ad data: ", displayAd(adData(adkey())) );
    console.log("Article data: ", displayArticles(articleData(adkey())));
    
}).call(this);
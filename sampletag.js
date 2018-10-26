
const userkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvb3BlckBtcG9pbnRpbmMuY29tIiwiaWQiOjM5Nywib3JnX2lkIjozMzEsIm9yZ19yb2xlIjoxfQ._M233oOb-MuhaXGAnLGow95r0Ap6YHZ2stt7Nxlxn9M'
const something = 'something';

( function(user, key, data ) {
    console.log("Ad goes here: ", window.location.href );
    console.log("userkey: ", userkey );
    console.log("something: ", something );

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                console.log("category response: ", this.responseText );
                var myAd = document.createElement('img');
                myAd.src = 'http://www.cooper.industrialrd.com/ads/leaderboard.jpg';
                //document.body.appendChild(myAd);
                //document.getElementById("ad").appendChild(myAd);
            }
        };
        //cooper s - eventually point to frase endpoint
        //xhttp2.open("GET", "http://localhost:8080/mockdata/", true);
        //xhttp2.open("GET", "https://fierce-waters-47645.herokuapp.com/mockdata/", true);
        xhttp2.open("GET", "http://api.frase.io/api/v1/analysis_for_url?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMachine_learning&fields=genre", true);
        xhttp2.setRequestHeader('Authorization', userkey );
        xhttp2.send();


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                console.log(" article response: ", this.response );
                var ok = JSON.parse(this.response);
                console.log("parsed response: ", ok[0].title  );

                for(var i = 0 ; i < ok.length ; ++i ){
                    console.log("article title: ", ok[i].title  );
                    console.log("article title: ", ok[i].url  )
        
                 }//end for
//cooper s (TBD) for now just have 3 seperate articles, but need a factory solution

                var art1Div = document.createElement("div");  
                document.getElementById("ad").appendChild(art1Div);
                var article1 = document.createElement('a');
                var art1Text = document.createTextNode(ok[0].title);
                article1.setAttribute('href', ok[0].url);
                article1.setAttribute('target', '_blank');
                article1.appendChild(art1Text);
                art1Div.appendChild(article1);

                var art2Div = document.createElement("div");  
                document.getElementById("ad").appendChild(art2Div);
                var article2 = document.createElement('a');
                var art2Text = document.createTextNode(ok[1].title);
                article2.setAttribute('href', ok[1].url);
                article2.setAttribute('target', '_blank');
                article2.appendChild(art2Text);
                art2Div.appendChild(article2);

                var art3Div = document.createElement("div");  
                document.getElementById("ad").appendChild(art3Div);
                var article3 = document.createElement('a');
                var art3Text = document.createTextNode(ok[2].title);
                article3.setAttribute('href', ok[2].url);
                article3.setAttribute('target', '_blank');
                article3.appendChild(art3Text);
                art3Div.appendChild(article3); 

            }//end if
        }///end onstatechange;

        //xhttp.open("GET", "http://localhost:8080/articles/", true);
        console.log("One fell swoop!");
        xhttp.open("GET", "https://fierce-waters-47645.herokuapp.com/articles", true);
        //xhttp.open("GET", "http://api.frase.io/api/v1/analysis_for_url?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMachine_learning&fields=genre,weight_map,summary_sentences,lang,statistics_sentences", true);
        //xhttp.setRequestHeader('Authorization', userkey );
        xhttp.send();
    


})( userkey, something )
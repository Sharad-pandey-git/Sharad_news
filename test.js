// console.log("This is my index js file");

var flag = 0;

get_news = function (url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=b859df0a50d84e7896e1eb01241b963f') {
    url = 'http://cors-anywhere.herokuapp.com/'+url;
    fetch(url, { headers: new Headers({ "X-Requested-With": "onottouchandfuck" }) })
        .then(a => a.json())
        .then(response => {
            console.log(response.articles);

            data2 = response.articles

            var x = "";
            var i = 1;

            data2.forEach(element => {
                try {

                    // console.log("Title:-\n", element.title);
                    // console.log("Description:-\n", element.description);
                    // console.log("IMGSCER:-\n", element.urlToImage);

                    var Heading = element.title;
                    var imgsrc = element.urlToImage;
                    var Discription = element.description;

                    // Defining our html

                    x = x + `<div class="container shadow bg-light rounded mt-2 mb-4 " id="main_cont">
                        <div class="row m-2">
                            <div class="col-1.5">
                                <h3> <i class="far fa-comment-alt"></i> ${i}. </h3>
                            </div>
                            <div class="col-10.5">
                                <div class="d-flex p-2 justify-content-center">
                                    <h2 class="mx-auto mb-1 mt-1">${Heading}</h2>
                                </div>
                            </div>
                        </div>
            
                        <div class="row m-2">
                            <div class="col-4 m-1">
                                <img src="${imgsrc}" class="img-fluid mx-auto d-block" alt="img" style="max-height: 230px;">
            
                            </div>
            
                            <div class="col-7 m-2">
                                <p class="mx-auto mb-2">${Discription} 
                                <a href="${element.url}" target="_blank">Read more....</a>
                                </p>
                            </div>
            
                        </div>
                        </div>`

                    // console.log(x);
                    document.getElementById('news_demo').innerHTML = x;

                    i += 1;
                }
                catch (err) {
                    console.log(err);
                }
            });
        });
}

if (flag == 0) {
    get_news();
    flag = 1;
}



function home_news() {
    get_news();
}

function business_news() {
    get_news(url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + "category=business&" + 'apiKey=b859df0a50d84e7896e1eb01241b963f');
}

function entertainment_news() {
    get_news(url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + "category=entertainment&" + 'apiKey=b859df0a50d84e7896e1eb01241b963f');
}

function health_news() {
    get_news(url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + "category=health&" + 'apiKey=b859df0a50d84e7896e1eb01241b963f');
}

function sports_news() {
    get_news(url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + "category=sports&" + 'apiKey=b859df0a50d84e7896e1eb01241b963f');
}

function technology_news() {
    get_news(url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + "category=technology&" + 'apiKey=b859df0a50d84e7896e1eb01241b963f');
}
function science_news() {
    get_news(url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + "category=science&" + 'apiKey=b859df0a50d84e7896e1eb01241b963f');
}

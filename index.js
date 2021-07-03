const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=41b04f9c37894939bd2fdd02ec0a5cf7";

fetch(url)
  .then((resp) => resp.json())
  .then((result) => (articles = result.articles))
  .then((articles) =>
    articles.map((article) => {
      if (article != null && article.urlToImage != null) mediaObject(article);
    })
  );

var mediaRow = document.querySelector("div.row");

function mediaObject(obj) {
  var mediaObjContainer = document.createElement("div");
  mediaObjContainer.setAttribute("class", "col-sm-4 mb-3");

  var media = document.createElement("div");
  media.setAttribute("class", "card");

  var mediaImg = document.createElement("img");
  mediaImg.setAttribute("class", "card-img-top");
  mediaImg.src = obj.urlToImage;

  var mediaBody = document.createElement("div");
  mediaBody.setAttribute("class", "card-body");

  var mediaTitle = document.createElement("h5");
  mediaTitle.setAttribute("class", "card-title");
  mediaTitle.innerHTML = obj.title;

  var mediaText = document.createElement("div");
  mediaText.setAttribute("class", "card-text");
  mediaText.innerHTML = obj.description;

  var mediaSource = document.createElement("a");
  mediaSource.classList = "btn btn-secondary btn-sm m-2";
  mediaSource.href = obj.url;
  mediaSource.innerText = "For details";

  mediaBody.append(mediaTitle, mediaText, mediaSource);
  media.append(mediaImg, mediaBody);
  mediaObjContainer.appendChild(media);
  console.log(mediaObjContainer);

  mediaRow.appendChild(mediaObjContainer);
}

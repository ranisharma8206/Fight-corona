var raw_news=null;

fetch("http://www.fightcovid19.xyz/news/raw.json")
  .then(response => response.json())
  .then(d => {
    raw_news = d;
    populateNews();
  });


function news(title,author,url,img,date,desc){
  return `<div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
         <div class="h-entry">
           <a href="blog-single.html"><img src="${img}" alt="${title}" class="img-fluid"></a>
           <div class="h-entry-inner">
             <h2 class="font-size-regular"><a href="${url}">${title}</a></h2>
             <div class="meta mb-4">by ${author} <span class="mx-2">•</span> ${date}</div>
             <p>${desc}</p>
           </div>
         </div>
       </div>`
}

function populateNews(){

  var count =0;
  raw_news["articles"].forEach(n =>
    {
      if(count<12 && count<raw_news["totalResults"])
      {
        $("#news").append(news(n["title"],n["source"]["name"],n["url"],n["urlToImage"],n["publishedAt"],n["description"]));
        count++;
      }
    });
}

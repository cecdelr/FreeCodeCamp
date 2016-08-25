function parseQuote(response) {
  var quoteText = response.quoteText;
  //used .append so p tags would load at the same time
  var quoteAuthor = response.quoteAuthor;
  var quoteLink = response.quoteLink;
  $("#tweetBtn a").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteText));

  $("#quote").append(
  "<p>" + quoteText + "</p>" + 
  "<p>" + quoteAuthor + "</p>");
}

function getQuote(){
  var tag = document.createElement("script");
  tag.src="http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote"; //=parseQuote would call the function to parse JSONP, normal JSON retrieval methods result
  //adds script tag that would generate quote to HTML
  $("#quote").html(tag);
}

getQuote();
$("#getQuote").on("click", getQuote);


/*Twitter Javascript*/
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
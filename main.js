const getQuote = () => {fetch("https://type.fit/api/quotes")
  .then(function(response) {return response.json();}).then(function(data) {
    document.getElementById("quote").innerHTML = "<span>"+data[Math.random()*data.length-1 | 0].text+"</span>";
    document.getElementById("author").innerHTML = `<span>- ${data[Math.random()*data.length-1 | 0].author ? data[Math.random()*data.length-1 | 0].author : "Anonymous"}</span>`;
  });
}

getQuote();

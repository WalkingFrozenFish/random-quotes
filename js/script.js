let url = "https://favqs.com/api/qotd";
let text = document.querySelector(".text-block");
let nameb = document.querySelector(".name-block");
let button = document.querySelector(".generate-quote");


button.addEventListener("click", function() {
    fetch(url)
    .then(function(data) {
        console.log(data)
        return data.json();
    })
    .then(function(data2) {
        console.log(data2);
        text.innerHTML = `"${data2.quote.body}"`;
        nameb.innerHTML = data2.quote.author;
    })
});

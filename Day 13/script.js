const ele = document.getElementById("con1");
const element = document.getElementById("con");

function myfunction() {
    fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
        ele.textContent = data.content;
        element.textContent= `-- ${data.author}`;
        })
}
myfunction();
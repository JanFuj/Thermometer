var temp = document.getElementById("temp");
var intervalID = setInterval(getTemp, 1000);

function getTemp(){
    fetch('/actualTemp/').then(function (response) {
        return response.json()
    }).then(function (text) {
        temp.innerHTML = text.actualTemp + '&deg;C';
        console.log(text)
    });
}


function Fetch(){
const data = fetch(
   "https://www.timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam" 
).then(response => {
    response.json().then((data) => {
        document.getElementById("time").innerText =
        data.hour + ":" + data.minute + ":"+ data.seconds;
    });
});
}
const courountine = setInterval(Fetch, 1000);
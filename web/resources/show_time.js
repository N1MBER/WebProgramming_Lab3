$(document).ready(function () {
    showTime();
    setInterval(function () {
        showTime();
    },7000);
})
function showTime() {
    let date = new Date();
    let month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
    let hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    let day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let year = (date.getFullYear());
    $("#time_place").html("Now is: " + day + "."  + month + "." + year + " " + hour + "." + minute  +"." + seconds)
}
    function Impfzentren(){

    let Name = document.getElementById("Name").value;
    let Strasse = document.getElementById("Strasse").value;
    let Stadt = document.getElementById("stadt").value;
    let Plz = document.getElementById("postal").value;



    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
    if (request.readyState == 4) {
    if (request.status == 200) {

    location.reload(true);
} else if (request.status == 400) {

        alert(request.responseText);
} else {
    document.getElementById("container").innerHTML = "<p> Interner Fehler, Bitte Laden Sie die Seite erneut.</p>";
}
}
}
    request.open("POST", "Centers", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("name=" + Name + "&strasse=" + Strasse + "&stadt=" + Stadt + "&postal=" + Plz);
}
function loadVaccinationCenters() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
    if (request.readyState == 4) {
    if (request.status == 200) {
    if (request.responseURL.indexOf("user_login.html") > -1) {
    location.reload(true);
}
    let vaccines = JSON.parse(request.responseText);
    let table = document.getElementById("inhalt");
    let inhalte = "";
    for (tableRow of vaccines) {
    inhalte += "<tr> <td> " + tableRow.name + "</td> <td> " + tableRow.stadt + " </td><td>" +
    tableRow.strasse + "</td><td>" + tableRow.postal + "</td></tr>";
}
    table.innerHTML += inhalte;
} else {
    document.getElementById("container").innerHTML = "<p>Interner Fehler,Bitte Laden Sie die Seite erneut.</p>";
}
}
}
 request.open("GET", "Centerliste");
    request.send();
}

    window.onload = loadVaccinationCenters;






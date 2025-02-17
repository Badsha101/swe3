function Impfung() {

    let Name = document.getElementById("Name").value;
    let Count = document.getElementById("Count").value;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            location.reload(true);
        } else if (request.status == 400) {
            alert(request.responseText);

        } else {
            document.getElementById("container").innerHTML = "<p> Interner Fehler, Bitte Laden Sie die Seite erneut.</p>";
        }
    }
    request.open("POST", "Vaccines", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("Name=" + Name + "&Count=" +Count);
}

function Alleimpfungen() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                if (request.responseURL.indexOf("user_login.html") > -1) {
                    location.reload(true);
                }

                let vaccine = JSON.parse(request.responseText);
                let table = document.getElementById("inhalt");
                let inhalte = "";
                for (tableRow of vaccine) {
                    inhalte += "<tr> <td> " + tableRow.name + "</td> <td> " + tableRow.Count + " </td></tr>";
                }
                table.innerHTML += inhalte;
            } else {
                document.getElementById("container").innerHTML = "<p>Interner Fehler,Bitte Laden Sie die Seite erneut.</p>";
            }
        }
    }
    request.open("GET", "Vaccineslist");
    request.send();
}

window.onload = Alleimpfungen;

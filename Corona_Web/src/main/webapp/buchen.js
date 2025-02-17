let Extrainfo= document.getElementById("extrainfo");
let leftup=document.querySelector("#leftup");
let rightup=document.querySelector("#rightup");



leftup.addEventListener('click',() => {

        Extrainfo.style.display = "none";
});

rightup.addEventListener('click',() => {

    Extrainfo.style.display = "block";
});

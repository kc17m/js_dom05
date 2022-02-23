// lev 2_8

// Schreibe eine Funktion, die beim Anklicken des Buttons neues Listenelement erstellt.
// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze
// querySelector()
// addEventListener()
// createElement()
// createTextNode()
// appendChild()
// createListElement()
// Sorge dafür, dass beim betätigen der ENTER-Taste ebenfalls ein Listenelement erstellt wird.
// Suche nach keycode.


let li = document.createElement("li");
let userinput = document.querySelector("#userinput");
let enter = document.querySelector("#enter");
let ul = document.querySelector("ul");

console.log(li, userinput, enter, ul);

enter.addEventListener("click", () => {
    li.textContent = userinput.value;
    ul.appendChild(li);
})

userinput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        li.textContent = userinput.value;
        ul.appendChild(li);
    }
})




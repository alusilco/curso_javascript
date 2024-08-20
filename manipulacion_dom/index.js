const input = document.getElementById("texto")
const btn = document.querySelector("button")
const paragraphs = document.getElementById("muestra-texto")

btn.addEventListener("click", showText)

function showText() {
    paragraphs.innerText = input.value
}






















const paragraph = document.querySelector("p")
const body = document.querySelector("body")
const list = document.querySelector("ul")

console.log(paragraph)
paragraph.textContent = "Este texto esta modificado dinámicamente"
//innerText hace lo mismo que text Content

const newTitle = document.createElement("h3")
newTitle.textContent = "Título dinámico en JS"
console.log(newTitle)
body.appendChild(newTitle)

//agrego elementos de tipo lista
for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    li.innerText = `Element ${i + 1}`; 
    list.appendChild(li);
}

//los hago desaparecer dinamicamente
for(let i=0; i<5; i++) {
    const li = document.querySelector("li")
    li.remove()

}

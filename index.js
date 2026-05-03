let n = 16;

const container = document.querySelector("#container");

function draw(n) {
    container.textContent = "";
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "cube");
        div.style.width = `${960 / n}px`;
        div.style.height = `${960 / n}px`;
        container.appendChild(div);
        div.addEventListener("mouseenter", () =>{
            div.style.backgroundColor = "pink";
        })
    }
}

draw(n);

const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    let size = prompt("Enter the grid size (no bigger than 100): ");
    while(size < 1 || size > 100){
        size = prompt("Enter the grid size (no bigger than 100): ");
    }
    draw(size);
})






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
            if(div.style.backgroundColor){
                div.style.opacity = Number(div.style.opacity) + 0.1;
            }
            else{
                div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                div.style.opacity = 0.1;
            }
            
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






// Calcolo totale spese
const costs = document.querySelectorAll(".cost");
const totalEl = document.getElementById("total");

let total = 0;
costs.forEach(cost => {
    total += Number(cost.textContent);
});

totalEl.textContent = total + " €";

// Toggle attività completate
const todos = document.querySelectorAll("#todo-list li");

todos.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("done");
    });
});
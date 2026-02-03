export function calculateTotal() {
    const costs = document.querySelectorAll(".cost");
    const totalEl = document.getElementById("total");

    let total = 0;

    costs.forEach(cost => {
        total += Number(cost.textContent);
    });

    totalEl.textContent = `${total} €`;
}
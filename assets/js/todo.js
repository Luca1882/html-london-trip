export function setupTodo() {
    const todos = document.querySelectorAll("#todo-list li");

    todos.forEach((item, index) => {
        const savedState = localStorage.getItem(`todo-${index}`);

        if (savedState === "done") {
            item.classList.add("done");
        }

        item.addEventListener("click", () => {
            item.classList.toggle("done");

            localStorage.setItem(
                `todo-${index}`,
                item.classList.contains("done") ? "done" : "todo"
            );
        });
    });
}
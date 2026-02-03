import { calculateTotal } from "./spese.js";
import { setupTodo } from "./todo.js";
import { setupTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
    calculateTotal();
    setupTodo();
    setupTheme();
});
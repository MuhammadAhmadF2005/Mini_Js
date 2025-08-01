let items = [];
const storageKey = 'todo_items';

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const themeToggle = document.getElementById("themeToggle");

// Load items and theme on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) items = JSON.parse(stored);

    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) document.body.classList.add('dark');

    renderItems();
});

function saveItems() {
    localStorage.setItem(storageKey, JSON.stringify(items));
}

function addItem() {
    const value = input.value.trim();
    if (!value) {
        alert("Item cannot be empty!");
        return;
    }
    items.push({ text: value, completed: false });
    input.value = "";
    renderItems();
    saveItems();
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
    saveItems();
}

function toggleComplete(index) {
    items[index].completed = !items[index].completed;
    renderItems();
    saveItems();
}

function editItem(index) {
    const newText = prompt("Edit item:", items[index].text);
    if (newText !== null && newText.trim() !== "") {
        items[index].text = newText.trim();
        renderItems();
        saveItems();
    }
}

function renderItems() {
    itemsDiv.innerHTML = "";
    items.forEach((item, index) => {
        const container = document.createElement("div");
        container.className = "item";

        const left = document.createElement("div");
        left.className = "left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.completed;
        checkbox.onchange = () => toggleComplete(index);

        const text = document.createElement("span");
        text.textContent = item.text;
        if (item.completed) text.classList.add("completed");

        left.appendChild(checkbox);
        left.appendChild(text);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editItem(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteItem(index);

        container.appendChild(left);
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);

        itemsDiv.appendChild(container);
    });
}

// Add item on Enter key
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addItem();
});

addBtn.addEventListener("click", addItem);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

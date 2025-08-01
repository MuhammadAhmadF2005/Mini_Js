let items = [];
const storageKey = 'todo_items';

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const themeToggle = document.getElementById("themeToggle");

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

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

function enableEdit(index) {
    const item = items[index];
    const newText = prompt("Edit item:", item.text);
    if (newText !== null) {
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
        editBtn.onclick = () => enableEdit(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteItem(index);

        container.appendChild(left);
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);

        itemsDiv.appendChild(container);
    });
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addItem();
});

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
};

document.addEventListener("DOMContentLoaded", loadItems);

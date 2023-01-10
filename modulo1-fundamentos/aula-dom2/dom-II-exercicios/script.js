const container = document.getElementById("container")
const newItem = document.querySelector(".item");

const adicionaItem = (event) => {
    // const newItem = document.createElement("article");
    // newItem.classList.add("item");
    // newItem.setAttribute("onclick", "removeItem(event)");
    // container.insertAdjacentElement('beforeend', newItem);

    // const newItem = `<article class="item" onclick="removeItem(event)"></article>`
    // container.insertAdjacentHTML('beforeend', newItem)

    const cloneItem = newItem.cloneNode();
    container.appendChild(cloneItem);
}

const removeItem = (event) => {
    event.target.remove();
}
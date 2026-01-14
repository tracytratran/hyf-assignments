console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function createEl(element) {
  return document.createElement(element);
}

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const ul = createEl("ul");
  document.body.insertAdjacentElement("afterbegin", ul);

  for (const product of products) {
    const li = createEl("li");
    ul.appendChild(li);
    li.innerHTML = `
      <div>
        Product: <strong>${product.name}</strong> | Price: <strong>${product.price}</strong> | Rating: <strong>${product.rating}</strong>
      </div>
    `;
  }
}

renderProducts(products);

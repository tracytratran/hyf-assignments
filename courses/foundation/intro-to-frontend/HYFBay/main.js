console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function createEl(element) {
  return document.createElement(element);
}

function renderProductInLines(product) {
  const li = createEl("li");
  li.innerHTML = `
    <div>
      Product: <strong>${product.name}</strong> | Price: <strong>${product.price}</strong> | Rating: <strong>${product.rating}</strong>
    </div>
  `;
  return li;
}

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const ul = createEl("ul");
  document.body.insertAdjacentElement("afterbegin", ul);

  for (const product of products) {
    ul.appendChild(renderProductInLines(product));
  }
}

renderProducts(products);

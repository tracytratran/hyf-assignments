console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function createEl(element) {
  return document.createElement(element);
}

function renderProductInLines(product) {
  const li = createEl("li");
  li.innerHTML = `
    <article class="product">
      <h3 class="product-name">Product: ${product.name}</h3>
      <p class="product-price">Price: ${product.price}</p>
      <p class="product-rating"> Rating: ${product.rating}</p>
    </article>
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

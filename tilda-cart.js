function txtlByu(name, color, size, printNode) {
  const product = {
    amount: 1500,
    img: "",
    name: name,
    price: 1500,
    quantity: 1,
    ts: Date.now(),
    options: [
      {
        option: "Размер",
        price: 0,
        variant: size
      },
      {
        option: "ЦВЕТ",
        price: 0,
        variant: color
      }
    ]
  };

  document.querySelector('input[name="Mamarama"]').value = printNode.outerHTML;

  tcart__addProduct(product);
}

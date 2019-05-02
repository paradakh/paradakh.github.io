function txtlByu(name, color, size, svg) {
  const product = {
    amount: window.doshirakPrice,
    img: "",
    name: name,
    price: window.doshirakPrice,
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

  tcart__addProduct(product);
}

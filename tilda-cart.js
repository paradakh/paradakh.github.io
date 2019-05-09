function txtlByu(name, color, size) {
  const product = {
    amount: window.txtlPrice,
    img: "",
    name: name,
    price: window.txtlPrice,
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

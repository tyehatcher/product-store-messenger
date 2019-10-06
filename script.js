var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

var popUpDiv = document.createElement("div");

popUpDiv.addEventListener("click", function() {
  this.style.display = "none";
  var products = document.getElementsByClassName("product");

  for (var x = 0; x < products.length; x++) {
    products[x].style.display = "flex";
  }
});

for (var i = 0; i < products.length; i++) {
  var productDiv = document.createElement("div");
  productDiv.id = "p" + i;

  var pic = document.createElement("img");
  pic.src = products[i].image;
  productDiv.appendChild(pic);

  var innerDiv = document.createElement("div");
  innerDiv.innerHTML =
    "Name: " + products[i].name + "<br>Price: $" + products[i].price;
  productDiv.appendChild(innerDiv);

  productDiv.classList.add("product");

  const t = products[i].color;

  document.body.appendChild(productDiv);
  productDiv.addEventListener("mouseover", function() {
    this.style.borderColor = t;
  });
  productDiv.addEventListener("mouseout", function() {
    this.style.borderColor = "black";
  });

  productDiv.addEventListener("click", function() {
    document.body.appendChild(popUpDiv);
    popUpDiv.classList.add("popUp");

    popUpDiv.innerHTML = this.innerHTML;
    popUpDiv.style.display = "flex";

    var products = document.getElementsByClassName("product");

    for (var x = 0; x < products.length; x++) {
      products[x].style.display = "none";
    }
  });
}
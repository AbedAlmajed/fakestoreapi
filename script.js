function Products(Title, Price, Description, Image) {
  this.Title = Title;
  this.Price = Price;
  this.Description = Description;
  this.Image = Image;
}

async function render() {
  let response = await fetch("https://fakestoreapi.com/products?limit=20");
  let x = await response.json(); //object
  x.map((element) => {
    let Title = element.title;
    let Price = element.price;
    let Description = element.description;
    let Image = element.image;
    let product = new Products(Title, Price, Description, Image);
    createProduct(product);

    // console.log(product);
  });
}
render();

function createProduct(product) {
  let div = document.getElementById("products");
  let newDiv = document.createElement("div");
  div.appendChild(newDiv);
  let p1 = document.createElement("p");
  p1.innerHTML = product.Title;
  newDiv.appendChild(p1);
  let p2 = document.createElement("p");
  p2.innerHTML = product.Price;
  newDiv.appendChild(p2);
  let p3 = document.createElement("p");
  p3.innerHTML = product.Description;
  newDiv.appendChild(p3);
  let p4 = document.createElement("img");
  p4.setAttribute("src", product.Image);
  p4.style.width = "40px";
  newDiv.appendChild(p4);
} //end


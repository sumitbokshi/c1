//store the products array in localstorage as "products"


function storeData(e) {
    e.preventDefault();
    let form = document.getElementById("products");

    let type = form.type.value;
    let description = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new Product(type, description, price, image);

    let data = JSON.parse(localStorage.getItem("products")) || [];

    data.push(p1);

    localStorage.setItem("products", JSON.stringify(data));

}

function Product(t, d, p, i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}
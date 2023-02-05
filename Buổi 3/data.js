// var product = {
//     name: "tên",
//     price: 300,
//     imgSrc: "link gì đó"
// }

var products = [

    {
        productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
        price: "35",
        image:
            "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg",
    },
    {
        productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
        price: "35",
        image:
            "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg",
    },
    {
        productName: "LEVENTS® COLORFUL PAINT TEE/ RED",
        price: "35",
        image:
            "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg",
    },
]

for (let product of products) {
    //tạo thẻ div class là card
    let card = document.createElement("div");
    card.classList.add("card");
    //tạo thẻ div class là image-container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //tạo thẻ img với src là giá trị của thuộc tính image các obj và thêm thẻ img thành con của div class image-container, cuối cùng thêm thẻ div class image-container thành con của div card
    let img = document.createElement("img");
    img.setAttribute("src", product.image);
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);


    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = product.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + product.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
document.getElementById("search").addEventListener("click", function () {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.getElementsByClassName("card")
    let productNames = document.getElementsByClassName("product-name")

    for (let i = 0; i < productNames.length; i++) {
        if (productNames[i].innerText.includes(searchInput)) {
            cards[i].classList.remove("hide")
        } else {
            cards[i].classList.add("hide")

        }
    }

})
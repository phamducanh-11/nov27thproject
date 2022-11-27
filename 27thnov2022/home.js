const products = [
    {
      name: "Tai nghe bluetooth",
      price: 290000,
      type: "Earphone",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/90/55/ea/340eb77f1170e4c381c866c275138a82.jpg.webp",
    },
    {
      name: "Tai nghe JBL C150SI",
      price: 235000,
      type: "Earphone",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/37/f0/49/fc18ee8fbf3a5f8b76b1b374c0db8851.jpg.webp",
    },
    {
      name: "Chuột không dây Logitech",
      price: 219000,
      type: "Mouse",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/33/82/18/5b3a94d00db81dcc6a7a2a8bd62cad04.jpg.webp",
    },
    {
      name: "Chuột chơi game G5",
      price: 509000,
      type: "Mouse",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/aa/e7/92/f6767d13b63b70c89e2e39360cff84c0.jpg.webp",
    },
    {
      name: "Bàn phím gấp 3 ZAGG Universal",
      price: 1520000,
      type: "Keyboard",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/a1/40/36/80c26fdf3f02e2f61f711030ace3bc74.png.webp",
    },
    {
      name: "Samsung Galaxy S20 FE",
      price: 8790000,
      type: "Smartphone",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/98/28/4a/7ec6ad5943179c4b2ad5ae8b79798599.jpeg.webp",
    },
    {
      name: "Iphone 14 pro max",
      price: 33490000,
      type: "Smartphone",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/0c/dd/e7/e6431984901119a1f8166cc4e579da93.png.webp",
    },
    {
      name: "Oppo A55",
      price: 3750000,
      type: "Smartphone",
      image: "https://salt.tikicdn.com/cache/280x280/ts/product/6f/b1/16/2a0e5c3f718d20d998cd13ccc84864b0.jpg.webp",
    },
  ];

const productsListElement = document.getElementById("product-list");

/**
 * 
 * @paran {array} productsList
 */
function render(productsList) {
    productsListElement.innerHTML = "";
    productsList.forEach(function (element) {
        productsListElement.insertAdjacentHTML(
    
            "beforeend",
            
                <li>
                    <h2>${element.name}</h2>
                    <span>${element.price}</span>
                </li>
            
            
        );
    });
}
render(products);


const ascBtn = document.getElementById("asc");
const descBtn = document.getElementById("desc");
ascBtn.onclick - function () {
    const sortedProducts = products.sort(function (a, b) {
        if (a.price == b.price) {
            return 0;
        } else if (a.price > b.price) {
            return 1;
        }else {
            return -1;
        }
    });

    render(sortedProducts);
};

descBtn.oneclick = function() {
    const sortedProducts = products.sort(function (a, b) {
        if (a.price == b.price) {
            return 0;
        } else if (a.price > b.price) {
            return -1;
        }else {
            return 1;
        }
    });

    render(sortedProducts);
}

const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelected = filterSelect.value;
  let filteredProducts = [];
  switch (typeSelected) {
    case "Earphone":
      filteredProducts = products.filter(function (element) {
        if (element.type == "Earphone") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "Mouse":
      filteredProducts = products.filter(function (element) {
        if (element.type == "Mouse") {
          return true;
        } else {
          return false;
        }
      });
      break;

      case "Keyboards":
      filteredProducts = products.filter(function (element) {
        if (element.type == "Keyboards") {
          return true;
        } else {
          return false;
        }
      });
      break;

      case "Smartphone":
        filteredProducts = products.filter(function (element) {
          if (element.type == "Smartphone") {
            return true;
          } else {
            return false;
          }
        });
        break;

    default:
      filteredProducts = products;
      break;
  }
  render(filteredProducts);
};
var products = [
    {
        name: "Asus Rog ",
        price: 3800,
        image: "https://www.tera.ma/wp-content/uploads/2024/04/Asus-ROG-Strix-17-G713R-G713RM-LL108W-AMD-RYZEN-9-6900HX-RTX-3060.jpg",
    },
    {
        name: "MSI Raider ",
        price: 3600,
        image: "https://www.tunisianet.com.tn/313051-large/pc-portable-msi-gaming-raider-ge68hx-13vf-i7-13700hx-rtx-4060-8g-16-go.jpg",
    },
    {
        name: "Alienware 17 R4 ",
        price: 2700,
        image: "https://images-cdn.ubuy.co.in/636bb17da41323107e1c12a2-alienware-17-r4-17-3-quot-full-hd.jpg",
    },
    {
        name: "HP OMEN 16-b0004nk",
        price: 3700,
        image: "https://zoom.com.tn/61593-large_default/pc-portable-hp-omen-16-b0004nk-i5-1400h-16go-1to-ssd-rtx-3060-6go-win11-4u8h7ea.jpg",
    },
    {
        name: "Asus TUF F15",
        price: 4000,
        image: "https://static.fnac-static.com/multimedia/Images/A6/4A/6C/15/22463654-1505-1540-1/tsp20231125082928/PC-Portable-Gamer-TUF-Gaming-F15-15-6-FHD-RTX-3050-4Go-Intel-Core-i5-12500H-RAM-16Go-512Go-D.jpg#366c8efc-91ba-4cb3-985a-7d7534ef2747",
    }, 
    {
        name: " Razer Blade 16 ",
        price: 3900,
        image: "https://laptop.mega-pc.net/wp-content/uploads/2023/05/razer-blade-16-rz09-0483tfh3-r3f1.webp",
    },
    {
        name: "AORUS 5 SE4",
        price: 5000,
        image: "https://chaoscomputers.co.za/wp-content/uploads/2022/08/1000-2.png",
    },
    {
        name: "Asus ROG Zephyrus",
        price: 4300,
        image: "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3wxMjc4MjI5fGltYWdlL2pwZWd8YURZMEwyZzJOQzh5TmpZME9EY3lPRFEyT1RVek5DOHhNakF3VjNneE1qQXdTRjl1ZFd4c3wzMjFjMDg3ZTJjN2I5NWZiYzJiNDgzNjk3OGZiZWNhYjU4NjM3NzVkNWRmZTMzZWI5ZjNhZjUzODMxN2E1NmM5",
    },
    {
        name: "GIGABYTE G5 MF",
        price: 3800,
        image: "https://www.sbsinformatique.com/12083/tunisie/home/pc-portable-gamer-gigabyte-g5-mf-156-i5-12500h-rtx-4050-8gb-ram-512gb-nvme-tunisie.jpg",
    },
    {
        name: "DELL INSPIRON G15",
        price: 3600,
        image: "https://www.scoopgaming.com.tn/14042-large_default/pc-portable-gaming-dell-inspiron-g15-i5-11e-rtx3050-ecran-156fhd.jpg",
    },
];

function each(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
        if (predicate(element, index)) {
            acc.push(element);
        }
    });
    return acc;
}
function displayProducts(productsToDisplay) {
    var productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    for (var i = 0; i < productsToDisplay.length; i++) {
        var product = productsToDisplay[i];
        var productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        
        productList.appendChild(productElement);
    }
}

function filterProducts() {
    var searchQuery = document.getElementById('search-bar').value.toLowerCase();
    var filteredProducts = filter(products, function(product) {
        return product.name.toLowerCase().includes(searchQuery);
    });
    displayProducts(filteredProducts);
}

var cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} has been added to the cart.`);
}

document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products); 
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'selim' && password === 'rtimi') {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});
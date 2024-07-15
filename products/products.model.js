const products = [
    {
        id: "shoe",
        description: "loda",
        price: 200.23,
        review: []
    },
    {
        id: "socks",
        description: "pkoda",
        price: 9000.34,
        review: []
    },
];

function getAllProducts() {
    return products;
}
function ProductsByPrice(min,max) {
    return products.filter((product) => {
        return product.price >=min && product.price <= max;
    })
}
function ProductsById(id) {
    return products.find((product) => {
        return product.id ==id;
    })
    
}
function addNewProduct(id, description, price) {
    const newProduct =  { id ,
        description,
        price,
        review:[],
    }
    products.push(newProduct);
    return newProduct;
}

module.exports = {getAllProducts,ProductsByPrice,ProductsById,addNewProduct};
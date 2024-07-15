const productModel= require('./products.model')

module.exports = {
    Query: {
    products: () => {
        return productModel.getAllProducts();
        },
        productsByPrice: (_,args) => {
            return productModel.ProductsByPrice(args.min, args.max);
        },
        productsById(_, args) {
            return productModel.ProductsById(args.id);
        }
            
    },
Mutation: {
    addNewProduct: (_,args) => {
        return productModel.addNewProduct(args.id,args.description,args.price)
}
}}
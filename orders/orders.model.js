
const orders=[
        {
            date: '27-1-2005',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: "shoe",
                        description: "loda",
                        price: 200.33,
                        review: [{ rating: 5, comment: "Great!" }]
                    },
                    quantity: 5
                }
            ]
        }
]
function gettAllOrders() {
    return orders;
}
module.exports = {gettAllOrders,};
let product = [{
    img: './img/products/f1.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},{
    img: './img/products/f2.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: './img/products/f3.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: './img/products/f4.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: './img/products/f5.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: './img/products/f6.jpg',
    brand: 'puma',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: './img/products/f7.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: './img/products/f8.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
}];

let newProduct = [
    {
    img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
},
{
    img: 'https://images.unsplash.com/photo-1612892158094-a4e23361afad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    brand: 'Nike',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$36'
},
{
    img: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    brand: 'Puma',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$66'
},
{
    img: 'https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    brand: 'HRX',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6'
}];


const container = document.querySelector('.pro-container');
const newArrivals = document.querySelector('#new-items');

function createProducts(product){

    for(let i=0; i < product.length; i++){
        container.innerHTML += `
            <div class="pro">
                <img src="${product[i].img}" alt="">
                <div class="des">
                    <span>${product[i].brand}</span>
                    <h5>${product[i].name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${product[i].price}</h4>
                </div>
                <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
            </div>`
    }
}
createProducts(product);


function newItems(newProduct){

    for (let i = 0; i < newProduct.length; i++) {
    newArrivals.innerHTML += 
    `
    <div class="pro">
                <img src="${newProduct[i].img}" alt="">
                <div class="des">
                    <span>${newProduct[i].brand}</span>
                    <h5>${newProduct[i].name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${newProduct[i].price}</h4>
                </div>
                <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
            </div>
    `
    }
}
newItems(newProduct);
// function sortProductByName(){
//     let newProduct = product.sort((a,b)=> a.brand > b.brand ? 1 : -1)
//     container.innerHTML = ""
//     createProducts(newProduct)
// }

// function filterByBrandName(name){
//     const newProduct = product.filter((item)=> item.brand == name)
//     container.innerHTML = ""
//     createProducts(newProduct)
// }
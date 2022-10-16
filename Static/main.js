let product = [{
    img: './img/products/f1.jpg',
    brand: 'Addidas',
    name: 'Cartoon astronaut T-shirt',
    rating: '******',
    price: '$6',
    categories: 'shirt'
},{
    img: './img/products/f2.jpg',
    brand: 'Hrx',
    name: 'Astronaut T-shirt',
    rating: '******',
    price: '$4',
    categories: 'shirt'
},
{
    img: './img/products/f3.jpg',
    brand: 'Hrx',
    name: 'Bartoon  T-shirt',
    rating: '******',
    price: '$77',
    categories: 'shirt'
},
{
    img: './img/products/f4.jpg',
    brand: 'Addidas',
    name: 'Destronaut T-shirt',
    rating: '******',
    price: '$60'
},
{
    img: './img/products/f5.jpg',
    brand: 'Puma',
    name: 'Eestronaut T-shirt',
    rating: '******',
    price: '$3'
},
{
    img: './img/products/f6.jpg',
    brand: 'Puma',
    name: 'Fartoon  T-shirt',
    rating: '******',
    price: '$36'
},
{
    img: './img/products/f7.jpg',
    brand: 'Nike',
    name: 'Trouser',
    rating: '******',
    price: '$56',
    categories: 'trouser'
},
{
    img: './img/products/f8.jpg',
    brand: 'Nike',
    name: 'Froun',
    rating: '******',
    price: '$86',
    categories: 'top-shirt'
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
let searchInput = document.querySelector('.search-input');
const srchBtn = document.querySelector('.search-btn');
const sortBy = document.querySelector('#sort-item');
const filterBy = document.querySelector('#filter-item');

srchBtn.addEventListener('click', Search);
sortBy.addEventListener('change', SortBy);
filterBy.addEventListener('change', Filter);


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


function Filter(e){
    let current = e.target.value;
    let filtered = product.filter(item => item.brand.toLowerCase() == current.toLowerCase())
    container.innerHTML = '';
    createProducts(filtered);
}

function SortBy(e){
    let current =  e.target.value;
    if(current == 'by-name'){
        let sortByName = product.sort((a,b) => a.name > b.name ? 1 : -1);
        container.innerHTML = '';
        createProducts(sortByName)
    }
    else if(current == 'by-brand'){
        let sortedArr = product.sort((a,b) => {
            return a.brand > b.brand  ? 1 : -1 })
            container.innerHTML = ""
            createProducts(sortedArr);
            console.log(sortedArr);
    }
    else if(current == 'by-price'){
        let sortedByPrice = product.sort((a,b) => a.price.split('$')[1] - b.price.split('$')[1]);
        container.innerHTML = '';
        createProducts(sortedByPrice);
    }
    
}


function Search(e){
    let current = searchInput.value;
    let filtered = product.filter(item => item.categories == current);
    container.innerHTML = '';
    createProducts(filtered);
}
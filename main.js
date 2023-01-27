
const userEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer =document.querySelector('#shopping-cart-container')
const productDetailContainer =document.querySelector('#product-detail-container')
const cardsContainer= document.querySelector('.cards-container')
const productDetailCloseIcon= document.querySelector('.product-detail-close')


const productList=[]
const arrDomElements=[desktopMenu,mobileMenu,shoppingCartContainer,productDetailContainer]


userEmail.addEventListener('click', toogleInactiveClass.bind(this,desktopMenu))
hamburgerMenu.addEventListener('click', toogleInactiveClass.bind(this,mobileMenu))
shoppingCartIcon.addEventListener('click', toogleInactiveClass.bind(this,shoppingCartContainer))
productDetailCloseIcon.addEventListener('click', closeProductDetail)



function closeDomElements(element,arr){
    for (item of arr){
        if(item!==element){
            item.classList.add('inactive')
        }
    }
}
function toogleInactiveClass(element) {
   closeDomElements(element,arrDomElements)
    element.classList.toggle('inactive')
}
function closeProductDetail(){
    productDetailContainer.classList.add('inactive')
}
function openProductDetail(){
    closeDomElements(productDetailContainer,arrDomElements)
    productDetailContainer.classList.remove('inactive')
}


productList.push(
    {
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
productList.push(
    {
        name: 'PC',
        price: 600,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
productList.push(
    {
        name: 'Tablet',
        price: 300,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
    </div>
</div> */}

function renderProductList(list){
for (product of list){
    const productCard= document.createElement('div')
    productCard.classList.add('product-card')

    const productImg=document.createElement('img')
    productImg.setAttribute('src',product.image)

    const productInfo= document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv= document.createElement('div')

    const priceParr= document.createElement('p')
    priceParr.innerText= '$'+product.price

    const nameParr= document.createElement('p')
    nameParr.innerText= '$'+product.name

    const productInfoFigure= document.createElement('figure')

    const addToCartIcon=document.createElement('img')
    addToCartIcon.setAttribute('src','/icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(addToCartIcon)
    productInfoDiv.append(priceParr,nameParr)
    productInfo.append(productInfoDiv,productInfoFigure)
    productCard.append(productImg,productInfo)
    cardsContainer.append(productCard)
    productImg.addEventListener('click', openProductDetail)
}

}

renderProductList(productList)


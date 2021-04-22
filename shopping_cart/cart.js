window.addEventListener('load', () => {
    const products = [
        {
            id: "id-1",
            name: 'Title 1',
            price: '100',
            image: 'https://cdn11.bigcommerce.com/s-8ixoraq0x8/images/stencil/1280x1280/products/10479/53163/bubble-costume-1__14076.1592778685.jpg'
        },
        {
            id: "id-2",
            name: 'Title 2',
            price: '300',
            image: 'https://www.hearthsong.com/medias/sys_master/images/images/hec/h26/8799540346910/731455-HSSP17-AF8133.jpg'
        },
        {
            id: "id-3",
            name: 'Title 3',
            price: '50',
            image: 'https://i.pinimg.com/564x/35/26/16/3526168f222a09d2dce04228271f93e1.jpg'
        }
    ];

    
    const productsContainer =  document.querySelector('.products');

    productsContainer.innerHTML = `${products.map(item => `
        <div class="product solid">   
            <div class="product__title">${item.name}</div>
            <img class="product__image" src="${item.image}">
            <div class="product__price">
                <button class="product__action" data-product-id="${item.id}">Add</button>
                <span class="price">${item.price}</span>
            </div>  
        </div>
    `).join('')}`;

    ///////REMOVE CART ITEM
    document.querySelector('.btn-clear').addEventListener('click', purchaseCanceled)

    function purchaseCanceled() {
        alert('All items will be removed')
        let cartItems = document.querySelector('.cart-items')
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }

    document.querySelector('.btn-purchase').addEventListener('click', purchaseRedirect)

    function purchaseRedirect() {
        alert('Thank you for your purchase!')
        let cartItems = document.querySelector('.cart-items')
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }

    let removeFromCart = document.querySelectorAll('.btn-remove')

    removeFromCart.forEach(removeBtn => {
        removeBtn.addEventListener('click', removeCartItem)
    })

    function removeCartItem(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    let quantityInputs = document.querySelectorAll('.cart-quantity-input')

    quantityInputs.forEach(input => {
       input.addEventListener('click', quantityChanged)
    });

    function quantityChanged(event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }

    function updateCartTotal() {
        let cartItemContainer = document.getElementsByClassName('cart-items')[0]
        let cartRows = cartItemContainer.getElementsByClassName('cart-row')
        let total = 0
        for (let i = 0; i < cartRows.length; i++) {
            let cartRow = cartRows[i]
            let priceElement = cartRow.getElementsByClassName('cart-price')[0]
            let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            let price = parseFloat(priceElement.innerText)
            let quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.querySelector('#total').innerText = total
    }
    /////Add to Cart

    let addToCartButtons = document.querySelectorAll('.product__action')

    addToCartButtons.forEach(addBtn => {
        addBtn.addEventListener('click', addToCartClicked)
    })

    
function addToCartClicked(event) {
    let addBtn = event.target
    let shopItem = addBtn.parentElement.parentElement
    let title = shopItem.querySelector('.product__title').innerText
    let price = shopItem.querySelector('.price').innerText
    let imageSrc = shopItem.querySelector('.product__image').src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

    function addItemToCart(title, price, imageSrc) {
        let cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        let cartItems = document.querySelector('.cart-items')
        let cartItemNames = cartItems.querySelectorAll('.cart-item-title')

        let cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                    <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-remove" type="button">REMOVE</button>
                </div>`
            cartRow.innerHTML = cartRowContents
            cartItems.append(cartRow)
            cartRow.querySelector('.btn-remove').addEventListener('click', removeCartItem)
            cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged)
        }
    
    // #Total

    let totalCost = 0;

    const buttons = productsContainer.querySelectorAll('button.product__action');
    const totalContainer = document.querySelector('#total')

    buttons.forEach(btn => {
        btn.addEventListener('click', onClickTotal)
    })

    function onClickTotal(event) {
        const productId = event.target.dataset.productId;
        const currentProduct = products.find(item => item.id == productId);

        totalCost += Number(currentProduct.price);
        totalContainer.innerHTML = totalCost;
    }

    console.log(buttons);
})



var tempDataCart = [];
if (localStorage.getItem('cart_items') != null) {
    tempDataCart = JSON.parse(localStorage.getItem('cart_items'));
}
console.log(tempDataCart);
// localStorage.clear();

function addToCart(elements) {
    let path_img_item = elements.getElementsByClassName('img_item')[0].src;
    let name_item = elements.getElementsByClassName('name_item')[0].innerText;
    let price_item = elements.getElementsByClassName('price_item')[0].innerText.split(' ')[1];
    setValueToLocalStorage(path_img_item, name_item, price_item);
}

function setValueToLocalStorage(path_img_item, name_item, price_item) {
    let status_check = true;
    for (let i = 0; i < tempDataCart.length; i++) {
        if (tempDataCart[i].name == name_item) {
            tempDataCart[i].count++;
            status_check = false;
        }
    }
    if (status_check) {
        tempDataCart.push(
            {
                img: path_img_item, 
                name: name_item, 
                price: price_item,
                count: 1
            }
        );
    }
    console.log(tempDataCart);
    localStorage.setItem('cart_items', JSON.stringify(tempDataCart));
    updateCountItemsCart(tempDataCart.length);
}
updateCountItemsCart(tempDataCart.length);

function updateCountItemsCart(nItems) {
    if (nItems > 0) {
        document.getElementsByClassName('count_items_cart_area')[0].classList.remove('hidden');
        document.getElementsByClassName('unit_items_cart')[0].innerText = nItems;            
    }
}


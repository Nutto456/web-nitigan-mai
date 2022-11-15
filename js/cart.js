if (localStorage.getItem('cart_items') != null) {
    tempDataCart = JSON.parse(localStorage.getItem('cart_items'));
}
console.log("FROM cart.html : ", tempDataCart);
// localStorage.clear();

var str_dataItems = `
    <table>
    <tr>
        <th>สินค้า</th>
        <th>จำนวนสินค้า</th>
    </tr>
`;

for (let i = 0; i < tempDataCart.length; i++) {
    str_dataItems += `
        <tr>
            <td>
                <div class="cart-info">
                    <img src="${tempDataCart[i].img}" width="200px">
                    <div>
                        <p class="ppt"">${tempDataCart[i].name}</p>
                        <small>ราคา : ฿ ${tempDataCart[i].price}</small>
                        <br>
                        <a href="" class="btn_remove" onclick="removeItem(this)">Remove<span class="nIndex hidden">${i}</span></a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="${tempDataCart[i].count}"></td>
        </tr>
    `;
}
if (tempDataCart.length == 0) {
    str_dataItems += `
        <tr>
            <td colspan="2">No items in cart</td>
        </tr>
    `;
}
str_dataItems += `<table>`;
document.getElementById('showDataInCart').innerHTML = str_dataItems;


function removeItem(element) {
    var index = parseInt(element.getElementsByClassName('nIndex')[0].innerText);
    if (index > -1) {
        tempDataCart.splice(index, 1);
    }
    console.log(tempDataCart);
    localStorage.setItem('cart_items', JSON.stringify(tempDataCart));
}
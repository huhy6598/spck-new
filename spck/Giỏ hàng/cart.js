let totalAmount = 0; // Biến lưu tổng số tiền giỏ hàng

let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset = false;

            let listcart = document.querySelectorAll('.cart .item');
            listcart.forEach(cart => {
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },200)
                }
            });

            if(checkIsset == false){
                // Lấy giá của sản phẩm
                const priceText = item.querySelector('.price').textContent;
                const price = parseFloat(priceText.replace(' VND', '').replace(',', ''));

                // Cập nhật tổng tiền giỏ hàng
                totalAmount += price;

                // Cập nhật lại tổng tiền
                updateCartTotal();

                document.querySelector('.listcart').appendChild(itemNew);
            }
        }
    })
});
function Remove($key){
    let listcart = document.querySelectorAll('.cart .item');
    listcart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
// Hàm tính tổng số tiền giỏ hàng
function calculateTotal() {
    let total = 0;
    let listcart = document.querySelectorAll('.cart .item');
    listcart.forEach(cartItem => {
        const priceText = cartItem.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace(' VND', '').replace(',', ''));
        const quantity = parseInt(cartItem.querySelector('.count').value);
        total += price * quantity;  // Tính tổng theo số lượng
    });
    return total;
}

// Cập nhật tổng tiền giỏ hàng
function updateCartTotal() {
    let total = calculateTotal();
    document.querySelector('.cart-total').textContent = `Total: ${total} 000 VND`;
}

// Thêm chức năng giảm giá
const discounts = {
    SUMMER20: 0.2, // 20% discount
    FREESHIP: 0,   // Free shipping
};

function applyDiscount(code) {
    const discountCode = code.toUpperCase();
    const discount = discounts[discountCode];

    if (discount !== undefined) {
        alert(`Discount code applied: ${discountCode}`);
        
        // Tính lại tổng số tiền sau khi áp dụng mã giảm giá
        let total = calculateTotal();
        total -= total * discount;  // Áp dụng giảm giá
        document.querySelector('.cart-total').textContent = `Total after discount: ${total} 000 VND`;
    } else {
        alert('Invalid discount code.');
    }
}

// Thêm sự kiện cho nút tính tổng số tiền
document.querySelector('.calculate-total-btn').addEventListener('click', () => {
    updateCartTotal();  // Cập nhật lại tổng giỏ hàng khi nhấn nút tính tổng
});

// Ví dụ: Xử lý mã giảm giá khi nhấn nút
document.querySelector('.discount-btn').addEventListener('click', () => {
    const code = document.querySelector('.discount-input').value;
    applyDiscount(code);
});
// Thêm sự kiện cho nút sao chép mã khuyến mãi
document.querySelectorAll('.copy-code-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const codeElement = event.target.previousElementSibling; // Lấy mã khuyến mãi
        const code = codeElement.textContent;

        // Copy mã khuyến mãi vào clipboard
        navigator.clipboard.writeText(code).then(() => {
            alert(`Code "${code}" has been copied to clipboard!`);
        }).catch(() => {
            alert('Failed to copy the code. Please try again.');
        });
    });
});

const products = [
    { name: "Strawberry ice cream", price: "20.000 VND", url: "/Thông tin sản phẩm/Kem Dâu/icecream.html", image: "cat1.jpg" },
    { name: "Bubble tea", price: "30.000 VND", url: "/Thông tin sản phẩm/Trà sữa/b_tea.html", image: "buble tea.jpg" },
    { name: "Strawberry soda", price: "15.000 VND", url: "/Thông tin sản phẩm/Soda/Soda.html", image: "soda.jpg" },
    { name: "Peach tea", price: "50.000 VND", url: "/Thông tin sản phẩm/Trà đào/p_tea.html", image: "peach tea.jpg" },
    { name: "Cappuccino", price: "30.000 VND", url: "/Thông tin sản phẩm/cafe/capu.html", image: "capuchino.jpg" },
    { name: "Matcha soda", price: "15.000 VND", url: "/Thông tin sản phẩm/Soda matcha/Soda_m.html", image: "matcha soda.jpg" },
    { name: "Sea salt coffee", price: "40.000 VND", url: "/Thông tin sản phẩm/cafe muối/cf_s.html", image: "coffe.jpg" },
    { name: "Egg coffee", price: "50.000 VND", url: "/Thông tin sản phẩm/cafe trứng/cf_e.html", image: "egg.jpg" },
];
// Hàm xử lý tìm kiếm
function searchProducts() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultContainer = document.getElementById("searchResults");

    // Xóa kết quả cũ
    resultContainer.innerHTML = "";

    if (query === "") {
        resultContainer.style.display = "none"; // Ẩn nếu không có nội dung
    } else {
        // Lọc sản phẩm (ví dụ dữ liệu giả)
        const results = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.innerHTML = `
                    <a href="${product.url}" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
                        <img src="${product.image}" alt="${product.name}" />
                        <div>
                            <h4>${product.name}</h4>
                            <p>${product.price}</p>
                        </div>
                    </a>
                `;
                resultContainer.appendChild(productDiv);
            });
        } else {
            resultContainer.innerHTML = "<p>No results found.</p>";
        }

        resultContainer.style.display = "block"; // Hiển thị khi có kết quả
    }
}

// Thêm sự kiện vào nút "Tìm kiếm"
document.getElementById("searchBtn").addEventListener("click", searchProducts);

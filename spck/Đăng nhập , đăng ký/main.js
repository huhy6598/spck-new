function dangky() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    if (localStorage.getItem(username)) {
        alert("Tên người dùng đã tồn tại!");
        return;
    }

    var user = {
        username: username,
        mail: mail,
        password: password,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
    window.location.href = "/Đăng nhập , đăng ký/Đăng nhập/dangnhap.html";
}
function dangnhap() {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra trường trống
    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Lấy thông tin người dùng từ localStorage
    var user = localStorage.getItem(username);
    if (user == null) {
        alert("Tên người dùng không tồn tại. Vui lòng kiểm tra lại!");
        return;
    }

    // Kiểm tra thông tin đăng nhập
    var data = JSON.parse(user);
    if (data && username == data.username && password == data.password) {
        alert("Đăng nhập thành công");
        window.location.href = "/Trang chủ/trangchu.html"; // Chuyển trang
    } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
    }
}


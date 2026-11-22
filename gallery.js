function upDate(previewPic) {
    // 1. Kiểm tra sự kiện đã kích hoạt chưa và in ra alt, src của ảnh
    console.log("Sự kiện upDate đã chạy!");
    console.log("Alt:", previewPic.alt);
    console.log("Src:", previewPic.src);

    // 2. Lấy phần tử div có id="image"
    const imageDiv = document.getElementById("image");

    // 3. Đổi chữ hiển thị thành nội dung alt của ảnh đang di chuột vào
    imageDiv.innerHTML = previewPic.alt;

    // 4. Đổi ảnh nền thành đường dẫn src của ảnh đó
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 1. Lấy phần tử div có id="image"
    const imageDiv = document.getElementById("image");

    // 2. Đặt lại ảnh nền về rỗng như ban đầu
    imageDiv.style.backgroundImage = "url('')";

    // 3. Đặt lại dòng chữ gốc ban đầu
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
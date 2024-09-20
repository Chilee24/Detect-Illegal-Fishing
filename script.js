// Hàm này để xử lý khi người dùng nhấn các nút
function triggerFileInput(action) {
    const fileUpload = document.getElementById('file-upload');

    // Hiển thị hộp thoại chọn file
    fileUpload.click();

    // Sau khi người dùng chọn file
    fileUpload.onchange = function () {
        if (fileUpload.files.length > 0) {
            const file = fileUpload.files[0];
            displayContent(`${action}: ${file.name}`);
            
            // Đọc nội dung của file
            readFileContent(file);
        } else {
            displayContent(`${action}: No file selected`);
        }
    };
}

// Hàm để hiển thị nội dung văn bản trong file
function readFileContent(file) {
    const reader = new FileReader();
    
    // Khi file được đọc xong
    reader.onload = function(e) {
        const content = e.target.result;
        // Hiển thị nội dung file lên khung trắng
        displayFileContent(content);
    };
    
    // Đọc file dưới dạng văn bản
    reader.readAsText(file);
}

// Hiển thị nội dung của file lên trang
function displayFileContent(content) {
    const contentBox = document.getElementById('content-box');
    contentBox.innerText = content;  // Hiển thị nội dung file trong khung trắng
}

// Hàm hiển thị tên file
function displayContent(message) {
    const contentBox = document.getElementById('content-box');
    contentBox.innerText = message;
}

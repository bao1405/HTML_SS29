function chaoHoi(ten, callback) {
    console.log("Xin chào, " + ten + "!");
    callback();
}
function ketThuc() {
    console.log("Chào hẹn gặp lại!");
}
chaoHoi("John", ketThuc);

//Callback function là một hàm JavaScript được truyền vào một hàm khác như là một tham số và được gọi (chạy) sau khi hàm chứa nó hoàn thành việc thực thi. Trong JavaScript, hàm được coi là một loại dữ liệu (first-class citizens), có nghĩa là chúng có thể được truyền như là tham số cho một hàm khác, được gán cho biến, và thậm chí là được trả về từ một hàm khác.Chức năng chính của callback function trong JavaScript là thực hiện một hành động nào đó sau khi một tác vụ đã hoàn tất. Điều này rất hữu ích trong các tình huống như xử lý bất đồng bộ (asynchronous programming), xử lý sự kiện, và các tác vụ không đồng bộ khác.
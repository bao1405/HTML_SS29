function timChuoiTrongMang(mang, chuoi) {
    return mang.filter(function (phanTu) {
        return phanTu.indexOf(chuoi) !== -1;
    });
}
let mangChuoi = ["Hello World", "JavaScript is fun", "Web development", "Coding is awesome"];
let chuoiNhap = prompt("Nhập vào chuỗi: ");
console.log("Mảng đã khai báo: ", mangChuoi);
console.log("Chuỗi đã nhập: ", chuoiNhap);
console.log("Các phần tử trong mảng có chứa chuỗi: ", timChuoiTrongMang(mangChuoi, chuoiNhap));
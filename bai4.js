function demSoLanXuatHien(chuoi, kyTu) {
    let ketQua = chuoi.match(new RegExp(kyTu, 'g'));
    return ketQua ? ketQua.length : 0;
}
let chuoi = prompt("Nhập vào chuỗi: ");
let kyTu = prompt("Nhập vào ký tự cần đếm: ");
console.log("Chuỗi đã nhập: ", chuoi);
console.log("Ký tự cần đếm: ", kyTu);
console.log("Số lần xuất hiện của ký tự trong chuỗi: ", demSoLanXuatHien(chuoi, kyTu));
function demSoKyTu(chuoi) {
    return chuoi.replace(/\s/g, "").length;
}
let chuoi = "Chương trình JavaScript đơn giản";
console.log("Chuỗi đã khai báo: ", chuoi);
console.log("Số ký tự trong chuỗi (không tính ký tự trống): ", demSoKyTu(chuoi));
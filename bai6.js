function vietHoaChuCaiDau(chuoi) {
    return chuoi.replace(/\b\w/g, function(ktudau) {
        return ktudau.toUpperCase();
    });
}
let chuoi = "chương trình javascript đơn giản";
console.log("Chuỗi đã khai báo: ", chuoi);
console.log("Chuỗi viết hoa chữ cái đầu: ", vietHoaChuCaiDau(chuoi));
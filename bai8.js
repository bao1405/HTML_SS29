function coTheTaoChuoi(chuoiKhaiBao, chuoiNhap) {
    let mangKhaiBao = chuoiKhaiBao.split('');
    let mangNhap = chuoiNhap.split('');
    for (let i = 0; i < mangNhap.length; i++) {
        let index = mangKhaiBao.indexOf(mangNhap[i]);
        if (index === -1) {
            return false;
        }
        mangKhaiBao.splice(index, 1);
    }
    return true;
}
let chuoiKhaiBao = "abcdef";
let chuoiNhap = prompt("Nhập vào chuỗi: ");
console.log("Chuỗi đã khai báo: ", chuoiKhaiBao);
console.log("Chuỗi đã nhập: ", chuoiNhap);
console.log("Có thể tạo chuỗi đã nhập từ chuỗi đã khai báo: ", coTheTaoChuoi(chuoiKhaiBao, chuoiNhap));
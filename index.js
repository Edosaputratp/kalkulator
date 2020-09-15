//document.write("hello")


// var nama variabel "string"

// function namaFunction(parameter) {
//     console.log(parameter);
// }

// namaFunction("string")
// function LuasPersegi(sisi) {
//     document.write(sisi * sisi)
// }
// LuasPersegi(10);

// document.write("<br>")

// function LuasPersegiPanjang(panjang, lebar){
//     document.write(panjang * lebar)
// }

// LuasPersegiPanjang(12,4);


// function LuasPersegiPanjang(panjang, lebar){
//     document.write(typeof panjang);
//     document.write(typeof lebar);
//     document.write(panjang * lebar);
// }
// var a = prompt('masukkan angka pertama')
// var b = prompt('masukkan angka kedua')
// var aInt = parseInt(a)
// var bInt = parseInt(b) 

// LuasPersegiPanjang(aInt,bInt)

function luasPersegiPanjang(panjang , lebar){
alert(panjang * lebar);
var konfirmasi = confirm("apakah ingin di ulang ?");
if (konfirmasi == true) {   
    var panjangPrompt = prompt("masukkan panjang ?")
     var lebarPrompt = prompt("masukkan lebar ?")

    var panjangPromptInt = parseInt(panjangPrompt);
    var lebarPromptInt= parseInt(lebarPrompt)

    luasPersegiPanjang(panjangPromptInt, lebarPromptInt);
} else {
    alert("tidak usah deh")
}
}

var panjangPrompt = prompt("masukkan panjang ?");
var lebarPrompt = prompt("masukkan lebar ?");

var panjangPromptInt =parseInt(panjangPrompt);
var lebarPromptInt = parseInt(lebarPrompt);

luasPersegiPanjang(panjangPromptInt, lebarPromptInt);

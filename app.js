let saniyeString = prompt (("saniye değeri giriniz..."));
let saniye = parseInt(saniyeString);
let dakika = parseInt(saniye/60);
let kalanSaniye = saniye % 60;
document.write(`girdiğiniz değer (${saniyeString}) = ${dakika} dakika ${kalanSaniye} saniyedir.`);

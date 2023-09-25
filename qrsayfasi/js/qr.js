var urlParams = new URLSearchParams(window.location.search);
var parametre = urlParams.get('parametre');

var userjson = decodeURIComponent(parametre);

/*
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: userjson,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H
});
*/

var qr = new QRious({
    element: document.getElementById('qrcode'),
    value: userjson,
    level: 'H',
    size: 256
})

console.log(userjson);
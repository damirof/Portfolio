//--------------------   TASK - 1   -----------------------



//          QIYMETLER

const dizel = 0.9;   // AZN/litr
const benzin = 1.0;  // AZN/litr
const premium = 1.5; // AZN/litr

//          MELUMAT DAXIL ETMEK  
let secim = prompt("Yanacaq növünü seçin:\n1. Dizel\n2. Adi Benzin\n3. Premium Benzin\nSeçiminiz (1-3):");

let yanacaqAdi, litrQiymeti;

if (secim === "1") {
    yanacaqAdi = "Dizel";
    litrQiymeti = dizel;
} else if (secim === "2") {
    yanacaqAdi = "Adi Benzin";
    litrQiymeti = benzin;
} else if (secim === "3") {
    yanacaqAdi = "Premium Benzin";
    litrQiymeti = premium;
} else {
    alert("Yanlış seçim! 1, 2 və ya 3 daxil edin.");
}

let litr = Number(prompt(yanacaqAdi + " neçə litr almaq istəyirsiniz?"));
let balans = Number(prompt("Balansınızı daxil edin (AZN):"));

//             ÜMUMİ XERC
let umumiXerc = litr * litrQiymeti;

//              END
if (balans >= umumiXerc) {
    let qalanPul = balans - umumiXerc;
    alert(
        "Alış uğurlu oldu!\n" +
        "Yanacaq: " + yanacaqAdi + "\n" +
        "Miqdar: " + litr + " litr\n" +
        "Ümumi xərc: " + umumiXerc + " AZN\n" +
        "Qalan balans: " + qalanPul + " AZN"
    );
} else {
    let eksikPul = umumiXerc - balans;
    alert(
        "Balansınız kifayət qədər deyil!\n" +
        "Yanacaq: " + yanacaqAdi + "\n" +
        "İstənilən miqdar: " + litr + " litr\n" +
        "Ümumi xərc: " + umumiXerc.toFixed(2) + " AZN\n" +
        "Balansınız: " + balans + " AZN\n" +
        "Çatışmayan məbləğ: " + eksikPul + " AZN"
    );
}



// ----------------------  TASK   ----------------------------



let movsum = prompt("Mövsümü daxil edin (yaz, yay, payiz, qis \n YAZILIŞA DİQQƏT ET!!!):");

let aylar;

switch (movsum) {
    case "yaz":
        aylar = "Mart, Aprel, May";
        break;
    case "yay":
        aylar = "İyun, İyul, Avqust";
        break;
    case "payiz":
        aylar = "Sentyabr, Oktyabr, Noyabr";
        break;
    case "qis":
        aylar = "Dekabr, Yanvar, Fevral";
        break;
    default:
        aylar = "Düzgün mövsüm daxil edilməyib!";
}

alert(movsum + " mövsümünə aid aylar: " + aylar);
const hari = 3;
let hasil;

switch (hari) {
case 1:
hasil = "minggu";
break;
case 2:
hasil = "senin";
break;
case 3:
hasil = "selasa";
break;
case 4:
hasil = "rabu";
break;
case 5:
hasil = "kamis";
break;
case 6:
hasil = "jumat";
break;
case 7:
hasil = "sabtu";
break;

    default:
        hasil= "hari tidak ada";
        break;
}

console.log(hasil);

const bln = "januari";
let bulan;

switch (bln) {
case "januari":
bulan=1;
break;
case "februari":
bulan=2;
break;
case "maret":
bulan=3;
break;    
case "april":
bulan=4;
break;    
case "mei":
bulan=5;
break;    
case "juni":
bulan=6;
break;    
case "juli":
bulan=7;
break;    
case "agustus":
bulan=8;
break;    
case "september":
bulan=9;
break;    
case "oktober":
bulan=10;
break;
case "november":
bulan=11;
break;
case "desember":
bulan=12;
break;
    default:
        bulan ="blm dibuat";
        break;
}

console.log(bulan);
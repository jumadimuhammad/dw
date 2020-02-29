function titikSama(kecepatanB, kecepatanI, selisihWaktu) {
    var i = kecepatanB * selisihWaktu // jarak yang ditempuh oleh bagus setelah berjalan selama 1 jam
    var j = 0 // jarak awal ismail

    var jarakB = kecepatanB * 60 // merubah jarak dari detik ke menit
    var jarakI = kecepatanI * 60 // merubah jarak dari detik ke menit

    var jamA = 1200 // jam awal berangkat bagus

    while (i != j) {
        i += jarakB
        j += jarakI
    }

    var a = ((i / jarakB) - (i / jarakB % 60)) / 60 // menjadikan jam
    var b = ((j / jarakI) - (j / jarakI % 60)) / 60 // menjadikan jam

    var d = `0${a}${(i/jarakB%60)}` // menjadikan jam dan menit
    var e = `0${b}${(j/jarakI%60)}` // menjadikan jam dan menit

    var f = jamA + Number(d)
    var hasil = f.toString()

    console.log(`Waktu yang ditempuh Bagus adalah ${d[1]} jam ${d[2]}${d[3]} menit dan waktu yang ditempuh Ismail adalah ${e[1]} jam ${e[2]}${e[3]} menit`)

    var tamp = (`Jadi mereka bertemu pada pukul ${hasil[0]}${hasil[1]}:${hasil[2]}${hasil[3]} WIB`)

    return tamp

}

console.log(titikSama(7, 10, 3600))
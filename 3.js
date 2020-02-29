function drawImage(num){

    for (var i = 1; i < num; i ++){
        var hasil = ''
        for(var j = 0; j < num; j ++){
            hasil += ' @ '
        }
        console.log(hasil)
    }

    return hasil

}

console.log(drawImage(5))
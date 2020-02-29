function minMax(arr) {
    var tamp = 0
    var res = []

    var ang1 = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 1) {
            tamp += arr[i]
            ang1.push(arr[i])
        }
    }
    res.push(tamp)
    console.log(`Angka 1 : ${ang1.join(' + ')} = ${tamp}`)
    tamp = 0

    var ang2 = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 0) {
            tamp += arr[i]
            ang2.push(arr[i])
        }
    }
    res.push(tamp)
    console.log(`Angka 2 : ${ang2.join(' + ')} = ${tamp}`)
    tamp = 0

    var ang3 = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 2) {
            tamp += arr[i]
            ang3.push(arr[i])
        }
    }
    res.push(tamp)
    console.log(`Angka 3 : ${ang3.join(' + ')} = ${tamp}`)
    tamp = 0

    var ang4 = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 3) {
            tamp += arr[i]
            ang4.push(arr[i])
        }
    }
    res.push(tamp)
    console.log(`Angka 4 : ${ang4.join(' + ')} = ${tamp}`)
    tamp = 0

    var ang5 = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 4) {
            tamp += arr[i]
            ang5.push(arr[i])
        }
    }
    res.push(tamp)
    console.log(`Angka 5 : ${ang5.join(' + ')} = ${tamp}`)
    tamp = 0

    var ang6 = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 5) {
            tamp += arr[i]
            ang6.push(arr[i])
        }
    }
    res.push(tamp)
    console.log(`Angka 6 : ${ang6.join(' + ')} = ${tamp}`)
    tamp = 0

    res.sort()
    var a = `Maka angka terkecil dan terbesar adalah ${res[0]} dan ${res[res.length-1]}`
    return a
}

console.log(minMax([3, 4, 5, 6, 7, 8]))